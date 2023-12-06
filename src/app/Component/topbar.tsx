'use client';

import React from "react";
import style from './topbar.module.css';
import Link from "next/link";

export default class NavBar extends React.Component {
    render() {
        return (<div className={style.topbar}>
            <div>
                <h2>{"{Ty Singh}"}</h2>
            </div>
            <div className={style.navContainer}>
                <Link className={style.navbtn} href="/">Home</Link>
                <Link className={style.navbtn} href="/literacy">Multi-literacy</Link>
                <Link className={style.navbtn} href="/context">Variation in Context</Link>
                <Link className={style.navbtn} href="/decision">Decision Making</Link>
                <Link className={style.navbtn} href="/power">Powerand Writng</Link>
                <Link className={style.navbtn} href="/revision">Revision</Link>
                <Link className={style.navbtn} href="/writing">Writing Process</Link>
                <Link className={style.navbtn} href="/artifacts">Artifacts</Link>
            </div>
        </div>)
    }
}