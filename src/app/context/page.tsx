import styles from './page.module.css'
import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import EmbedContentCard from '../Component/embedContentCard.module';
import { Fragment } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Variation Across Contexts"/>
      <div className="cardContainer">
        <EmbedContentCard link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110268&authkey=!AMYZi0C7s1vqlPQ&em=2">
          <p>On the left is an annotated version of MA1. The yellow highlights are appeals to ethos, the red highlight is an appeal to logos, and the blue highlight is an appeal to pathos. The green highlight is the ethos+pathos appeal. Lastly, the orange text is a usage of Kairos. <Link href="https://1drv.ms/w/s!AsE8SBPRDzn10Bz4LD2r81ROWMtg?e=MOtao2" target='_blank'>Here </Link>is a link to the document, where you can see the comments explaining each of the annotations.</p>
        </EmbedContentCard>
        <ContentCard image='./variations-across-context/exigence.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>This highlighted document, which appeared also in my writing processes section, also demonstrates my ability to pick apart elements of an exigence. That is, I can analyze rehtorical patterns.</p>
        </ContentCard>
      </div>
      
    </Fragment>
  )
}
