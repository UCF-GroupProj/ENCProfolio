'use client';

import React from "react";
import style from './topbar.module.css';
import Link from "next/link";

export default class NavBar extends React.Component {
    render() {
        return (<div className={style.topbar}>
            <div>
                <h2>Zhiyan Chen</h2>
            </div>
            <div className={style.navContainer}>
                <Link className={style.navbtn} href="/">Home</Link>
                <Link className={style.navbtn} href="/writing">Writing Process</Link>
                <Link className={style.navbtn} href="/literacy">Multiple Literacies</Link>
                <Link className={style.navbtn} href="/context">Variation Context</Link>
                <Link className={style.navbtn} href="/decision">Decision Making</Link>
                <Link className={style.navbtn} href="/power">Power</Link>
                <Link className={style.navbtn} href="/revision">Revision</Link>
                <Link className={style.navbtn} href="/files">Artifact Files</Link>
            </div>
        </div>)
    }
}