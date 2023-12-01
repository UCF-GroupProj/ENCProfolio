import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Decision Making" subtext='Students will be able to produce writing that demonstrates their ability to navigate choices and constraints when writing for specific audiences, genres, and purposes'/>
    </Fragment>
  )
}
