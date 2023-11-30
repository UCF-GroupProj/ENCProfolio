'use client';

import React from "react";
import style from './contentcard.module.css';
import Link from "next/link";

export default class contentCard extends React.Component {
    render() {
        return (<div className={style.mainCard}>
            <div className={style.cardImage}>
                <img src="https://via.placeholder.com/150" />
            </div>
            <div className={style.cardText}>
                <h2>Card Title</h2>
                <p>Card DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard DescriptionCard Description</p>
                <Link href="/literacy/page">
                    Read More
                </Link>
            </div>
        </div>)
    }
}