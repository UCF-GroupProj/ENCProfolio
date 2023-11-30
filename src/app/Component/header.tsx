'use client';

import React from "react";
import style from './header.module.css';

type cardProps = {
    text: string
}

export default class contentCard extends React.Component<cardProps> {
    constructor(props: cardProps) {
        super(props);
    }
    render() {
        return (<div className={style.header}>
            <h1>{this.props.text}</h1>
        </div>)
    }
}