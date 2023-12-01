import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Multi-Literacy" subtext='Students will be able to describe and reflect on writing processes in order to flexibly adapt them to support their goals.'/>
      <div className="cardContainer">
        <ContentCard image="https://via.placeholder.com/1000">
          <p>HELLO WORLD!</p>
        </ContentCard>
        <ContentCard image="/Sample.png">
          <p>sdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoi</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
