import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Decision Making" subtext='Students will be able to produce writing that demonstrates their ability to navigate choices and constraints when writing for specific audiences, genres, and purposes'/>
      <div className='cardContainer'>
        <ContentCard image='MA2_decision.png'>
          <p>For this MA2, I was able to demonstrate one of the few compromises I've made throughout the development of the paper. For the audience, I had three (which can be seen on the artifact), but after comparing each pros and cons, I was able to ultimately made the correct decision and selected professors.</p>
        </ContentCard>
        <ContentCard image='MA3_Decision.png'>
          <p>For my MA3, the reason for selection PowToon as my animation is not only to try and create an entertaining content for the reader, but also some constraint within myself</p>
          <p>Some of my weaknesses including public or even recording speak, so I didn't include my voice. Other weaknesses is that I've never made a proper video as an assignment before, so my goal at the time was to pick something that was manageable, which PowToon did.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
