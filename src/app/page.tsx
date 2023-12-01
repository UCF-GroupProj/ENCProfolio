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
          <div className={styles.documentDiv}>
            <iframe src="https://drive.google.com/file/d/1QetiktiAuPtUdWOQ2ifoIpdDlOOG4-Jr/preview" className={styles.documentFrame} ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
