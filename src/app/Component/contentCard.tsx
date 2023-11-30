'use client';

import React from "react";
import style from './contentcard.module.css';

type cardProps = {
    image: string,
    link: string,
    children: React.ReactNode
}

export default class contentCard extends React.Component<cardProps> {
    constructor(props: cardProps) {
        super(props);
    }
    render() {
        return (<div className={style.mainCard}>
            <div className={style.cardImage}>
                <a href={this.props.link} target="_blank">
                    <img src={this.props.image ?? "https://via.placeholder.com/1000"} alt="Image"/>
                </a>
            </div>
            <div className={style.cardText}>
                <div className={style.formatTxt}>
                    {this.props.children}
                </div>
            </div>
        </div>)
    }
}