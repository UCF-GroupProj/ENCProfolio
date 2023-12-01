import Topbar from '../Component/topbar';
import Header from '../Component/header';
import { Fragment } from 'react';
import ContentCard from '../Component/contentCard';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Multi-Literacy" subtext='Students will be able to demonstrate how they marshal/leverage their multiple literacies (e.g. speaking, listening, reading, multilingual writing, translating, multimodality, etc.) to support their writing processes'/>
      <div className="cardContainer">
        <ContentCard image="MA4_literacy.png">
          <p>The hightlighted portion demonstrates different ways that I was able to obtain different types of literacy skills, though many different medium, rather than a one common place.</p>
        </ContentCard>
        <ContentCard image="Outcome2_literacy.png">
          <p>This artifact demonstrates that I was able to successfully use multiliteracy by utilize several editing tools within the animation software to create content that are entertaining for my target audiences.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
