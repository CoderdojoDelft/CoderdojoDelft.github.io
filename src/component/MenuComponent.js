import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

import { OcticonComponent } from './OcticonComponent';
import { routes } from '../routes';

export class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleClose() {
        this.setState({menuOpen: false});
    }

    handleOpen() {
        this.setState({menuOpen: true});
    }

    render() {
        const sortedRouteKeys = Object.keys(routes).sort((a , b) => {
            if (routes[a].weight < routes[b].weight) {
                return -1;
            }

            if (routes[a].weight > routes[b].weight) {
                return 1;
            }

            return 0;
        });

        return (
            <React.Fragment>
                <a onClick={this.handleOpen} className="menu-open">
                    <OcticonComponent name="three-bars" size="large" />
                </a>
                <nav className={`menu-nav ${this.state.menuOpen ? 'open' : 'close'}`}>
                    <a onClick={this.handleClose} className="menu-close">
                        <OcticonComponent name="x" />
                    </a>
                    <ul className="menu-list" onClick={this.handleClose}>
                        {
                            sortedRouteKeys.map((route, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={routes[route].url} className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}>{routes[route].title}</NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}
