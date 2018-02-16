import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo_almundo from '../logo-almundo.svg' // relative path to image 

export default () =>

    <Navbar className="navItem" collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="index.html">
                    <img src={logo_almundo} alt={"logo"} />
                </a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>

//Stateless Component ! 