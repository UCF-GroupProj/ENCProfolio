'use client';

import React from "react";
import style from './topbar.module.css';


export default class NavBar extends React.Component {
    render() {
        return (<div className={style.container}>
            <div>
                <h2>{"{Our Name Here}"}</h2>
            </div>
            <div>
                <p>TaB</p>
            </div>
        </div>)
    }
}