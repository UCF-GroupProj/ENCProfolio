'use client';

import React from "react";
<<<<<<< HEAD
import style from "./embedContentCard.module.css";
=======
import style from './embedContentcard.module.css';
>>>>>>> c6fcd819ba010cef1cfdaf5cd0c1fd2932cdb720

type cardProps = {
    link: string,
    children: React.ReactNode,
    embBox?: {
        maxWidth?: string,
        maxHeight?: string
    }
}

export default class EmbedContentCard extends React.Component<cardProps> {

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