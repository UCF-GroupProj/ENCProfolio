import Image from 'next/image'
import styles from './page.module.css'
import Header from '../Component/header';
import Topbar from '../Component/topbar';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Variation Context" subtext='Students will be able to identify, analyze, and reflect on variation in rhetorical and linguistic patterns, including their own, from a range of contexts (e.g cultural, digital, workplace, and/or academic)'/>
    </Fragment>
  )
}
