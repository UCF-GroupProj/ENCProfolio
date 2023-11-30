import Image from 'next/image'
import styles from './page.module.css'
import Header from '../Component/header';
import Topbar from '../Component/topbar';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Variation Context"/>
    </Fragment>
  )
}
