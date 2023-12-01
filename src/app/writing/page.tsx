import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing Processes" subtext='Students will be able to describe and reflect on writing processes in order to flexibly adapt them to support their goals'/>
    </Fragment>
  )
}
