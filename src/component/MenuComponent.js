import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import { breakpoint, color, font, whitespace } from '../style/variables';
import { OcticonComponent } from './OcticonComponent';
import { routes } from '../routes';

const Nav = styled.nav`
    @media only screen and (max-width: ${breakpoint.md - 1}px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${color.white.white};
        display: none;
        overflow: auto;
        
        &.open {
            display: block;
        }
    }
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        flex-shrink: 0;
        flex-grow: 1;
        margin-right: ${whitespace.n2};
        text-align: right;
    }
`;

const List = styled.ul`
    padding: ${whitespace.n5} ${whitespace.n3};
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        padding: ${whitespace.n2} ${whitespace.n0} ${whitespace.n2} ${whitespace.n2};
    }
`;

const Link = styled(NavLink)`
    display: inline-block;
    padding: ${whitespace.n1} ${whitespace.n2};
    color: ${color.black.black};
    font-family: 'Bebas Neue W01 Regular';
    font-size: ${font.size.n0};
    line-height: ${font.line.n0};
    text-decoration: none;
    text-align: right;
    
    &:hover,
    &.active {
        background-color: ${color.yellow.selective};
        color: ${color.white.white};
    }
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        font-size: ${font.size.n1};
    }
`;

const Close = styled.a`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    margin: ${whitespace.n4};
    cursor: pointer;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        display: none;
    }
`;

const Open = styled.a`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    margin: ${whitespace.n4};
    cursor: pointer;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        display: none;
    }
`;

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
                <Open onClick={this.handleOpen}>
                    <OcticonComponent name="three-bars" size="large" />
                </Open>
                <Nav className={this.state.menuOpen ? 'open' : 'close'}>
                    <Close onClick={this.handleClose}>
                        <OcticonComponent name="x" />
                    </Close>
                    <List onClick={this.handleClose}>
                        {
                            sortedRouteKeys.map((route, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={routes[route].url} className={({ isActive }) => isActive ? 'active' : ''}>{routes[route].title}</Link>
                                    </li>
                                );
                            })
                        }
                    </List>
                </Nav>
            </React.Fragment>
        );
    }
}
