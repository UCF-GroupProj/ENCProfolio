import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Decision Making"/>
    </Fragment>
  )
}
