import Image from 'next/image'
import styles from './page.module.css'
import Topbar from './Component/topbar';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <div className={styles.centerDiv}>
        <div className={styles.holderParent}>
          <div className={styles.textHolder}>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
            <p>hdihsaidoasdoisajoisjosadasd</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
