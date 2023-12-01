import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing Processes"/>
      <ContentCard img={{maxWidth: "80rem", maxHeight: "30rem"}} image="./writing-processes/highlighting.jpg" link="https://via.placeholder.com/1000">
          <p></p>
      </ContentCard>
      <ContentCard img={{maxWidth: "60rem", maxHeight: "20rem"}} image="./writing-processes/free-writing.jpg" link="https://via.placeholder.com/1000">
        <p></p>
      </ContentCard>
    </Fragment>
  )
}
