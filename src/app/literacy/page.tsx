import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Multi-Literacy"/>
      <div className="cardContainer">
        <ContentCard image="https://via.placeholder.com/1000" link="https://via.placeholder.com/1000">
          <p>HELLO WORLD!</p>
        </ContentCard>
        <ContentCard image="https://via.placeholder.com/1000" link="https://via.placeholder.com/1000">
          <p>sdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoi</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
