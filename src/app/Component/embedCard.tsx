'use client';

import React from "react";
import style from './embedcard.module.css';

type cardProps = {
    title: string,
    link: string,
    size?: string,  // TODO
}

export default class embedCard extends React.Component<cardProps> {
    modalBox: React.RefObject<HTMLDivElement>;
    constructor(props: cardProps) {
        super(props);
        this.modalBox = React.createRef();
    }
    render() {
        return (<div className={style.mainCard}>
            <h2>{this.props.title}</h2>
            <hr/>
            <iframe src={this.props.link} className={style.iframe} allowFullScreen>Embed Loading...</iframe>
        </div>)
    }

}