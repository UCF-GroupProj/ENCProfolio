import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Multi-Literacy" subtext='Students will be able to demonstrate how they marshal/leverage their multiple literacies (e.g. speaking, listening, reading, multilingual writing, translating, multimodality, etc.) to support their writing processes'/>
      
    </Fragment>
  )
}
