'use client';

import React from "react";
import style from './contentcard.module.css';

type cardProps = {
    image: string,
    children: React.ReactNode,
    img?: {
        maxWidth?: string,
        maxHeight?: string
    }
}

export default class contentCard extends React.Component<cardProps> {
    modalBox: React.RefObject<HTMLDivElement>;
    constructor(props: cardProps) {
        super(props);
        this.modalBox = React.createRef();
    }
    render() {
        return (<div className={style.mainCard}>
            <div className={style.cardImage}>
                <img src={this.props.image ?? "https://via.placeholder.com/1000"} title="Click to zoom" style={{maxWidth: this.props.img?.maxWidth, maxHeight: this.props.img?.maxHeight}} alt="Image" onClick={this.showImgZoomModal}/>
            </div>
            <div className={style.cardText}>
                <div className={style.formatTxt}>
                    {this.props.children}
                </div>
            </div>
            <div className={style.imgZoomModal} ref={this.modalBox} onClick={this.hideImgZoomModal}>
                <img src={this.props.image ?? "https://via.placeholder.com/1000"} alt="Image"/>
            </div>
        </div>)
    }
    showImgZoomModal = () =>
        this.modalBox.current?.style.setProperty("display", "flex");
    
    hideImgZoomModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        (event.target === this.modalBox.current) ?
            this.modalBox.current?.style.setProperty("display", "none") : undefined;
}