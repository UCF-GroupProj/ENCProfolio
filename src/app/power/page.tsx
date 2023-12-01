import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing and Power" subtext='Students will be able to critically examine and act on the relationship among identity, literacy, language, and power'/>
      <div className="cardContainer">
      </div>
    </Fragment>
  )
}
