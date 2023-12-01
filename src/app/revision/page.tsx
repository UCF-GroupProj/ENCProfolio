import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Revision" subtext='Students will be able negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing'/>
      <div className="cardContainer">
      </div>
    </Fragment>
  )
}
