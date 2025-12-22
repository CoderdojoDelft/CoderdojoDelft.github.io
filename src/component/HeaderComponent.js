import React from 'react';

export function HeaderComponent() {
    return (
        <header>
            <a href="/" className="header-back-to-home">
                <img src="/img/logo.png" alt="Coder Dojo Delft" className="header-logo" />
            </a>
        </header>
    );
}
