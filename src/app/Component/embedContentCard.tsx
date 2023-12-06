'use client';

import React from "react";
import style from './embedContentCard.module.css';

type cardProps = {
    link: string,
    children: React.ReactNode,
    embBox?: {
        maxWidth?: string,
        maxHeight?: string
    }
}

export default class embedContentCard extends React.Component<cardProps> {

    render() {
        return (<div className={style.mainCard}>
            <div className={style.cardEmbed}>
                <iframe src={this.props.link} className={style.iframe} allowFullScreen>Embed Loading...</iframe>
            </div>
            <div className={style.cardText}>
                <div className={style.formatTxt}>
                    {this.props.children}
                </div>
            </div>
        </div>)
    }

}