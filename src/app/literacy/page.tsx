import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '../Component/topbar';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <div className={styles.center}>
        <ContentCard/>
        <ContentCard/>
      </div>
    </Fragment>
  )
}
