import Image from 'next/image'
import styles from './page.module.css'
import Topbar from './Component/topbar';
import EmbedCard from './Component/embedCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <div className={styles.centerDiv}>
        <div className={styles.holderParent}>
          <div className={styles.documentDiv}>
            <EmbedCard title="" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110263&authkey=!AEVduQPCG7iPMYo&em=2"/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
