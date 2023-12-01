import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing Processes" subtext='Students will be able to describe and reflect on writing processes in order to flexibly adapt them to support their goals'/>
      <div className="cardContainer">
        <ContentCard image="Blogv2.png">
          <p>There's several reason I've chosen blog. One of it's nature of allowing me to create a professional page to express my concern, while also allowing other multi-media, such as images. It's also allowed me to format the page flexibly with a few clicks and has enough features to design what I need.</p>
        </ContentCard>
        <ContentCard image="/Outcome1.png">
          <p>For this artifact, it shows the process during my topic selection. While I'm passionate with both topics, the "stop paid textbooks" allowed me to design my argument in more effective way, by not only allowing me to select a very specific audience, but also an action that the reader themselves can immediate take.</p>
        </ContentCard>
        <ContentCard image="/Sample.png">
          <p>sdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoisdoasjdoisajdisajdoisajdoisajdoi</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
