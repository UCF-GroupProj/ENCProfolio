import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing Processes"/>
      <div className="cardContainer">
        <ContentCard image="writing-processes/free-writing.jpg" img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>This free writing excerpt helped me to collect my thoughts on the ideas of literacy, and I this paragraph largely sums up the ideas that I had.</p>
        </ContentCard>
        <ContentCard image="writing-processes/highlighting.jpg" img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>Unfortunately I no longer have the MA1 draft with the hightlights. Here, however, is the outline which I followed. This visual aid helped me enourmously to write my assignemts, and was only really possible becasue of the rhetorical analysis was so easy for me to parse and make into highlightable sections.</p>
        </ContentCard>
      </div>
      
    </Fragment>
  )
}
