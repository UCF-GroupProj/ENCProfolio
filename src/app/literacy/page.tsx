import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Multi-Literacy"/>
      <div className="cardContainer">
        <ContentCard image="multiliteracy/adobe.jpg" img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>In MA3 I had to learn start to develop a literacy in video editing software to make the video. I learned jumpcuts, which cut the video length down by over half.</p>
        </ContentCard>
        <ContentCard image="./multiliteracy/gee.jpg" img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>This quote, from James Paul Gee's <Link href="https://www.jstor.org/stable/42743865"><i>Literacy, Discourse, and Linguistics: Introduction,</i></Link>is the quote that comes to mind when I think of literacy.</p>
        </ContentCard>
        <ContentCard image="./multiliteracy/email.jpg" img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p> For MA1, I had to adhere to formatting conventions of emails, some of them listed below:
            <ul>
              <li>No indented paragraphs</li>
              <li>12pt Times New Roman</li>
              <li>Introduction</li>
              <li>Signing off</li>
            </ul>
          </p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
