import React, { Component } from 'react';
import './Layout.scss'
import Nav from './nav'
import Content from './content'
import Head from './head'


export default class Layout extends Component {
    render() {
        return (
            <div className="cms_layout">
                <aside>
                    <Nav></Nav>
                </aside>
                <header>
                    <Head></Head>

                </header>
                <div className="cms_main">
                    <main>
                        <Content></Content>


                    </main>
                </div>
            </div>
        );
    }
}


