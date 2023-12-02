import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';
import { Content } from 'next/font/google';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Revision" subtext='Students will be able negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing'/>
      <div className="cardContainer">
        <ContentCard image="MA1_Revision.png">
          <p>This artifact is able to show one of the small revision from someone's feedback improves the readability of the blog.</p>
        </ContentCard>
        <ContentCard image="TCNote2_revision.png">
          <p>I was able to revise some of the conference suggestion from the teacher, such as adding more details and making "Pay 2 win" more clear or further discussing the use of second person. Unfortunately, I wasn't able to revise some of the changes like organizing the paragraph per question because it wasn't too clear to me at the time what to do with it and I don't want to bother the professor much.</p>
        </ContentCard>
        <ContentCard image="MA4_revision.png">
          <p>Unfortunately for me, I wasn't able to submit the conference note on time, and it somehow didn't save on my system, so that's a lost treasure. But I was able to remember some of the revisions that was suggested for MA4. One of which is highlighted, showing that adding more context about the journal that I was citing, and by doing so, when I re-read the paper, I'm able to get more context out of the journal that was cited on the paper.</p>
          <p>With some other changes, I had to drop some, such as one of the suggestion that not only improves the flow of the paragraphs significantly but reduce redunancy of mentioning the sponsors. The reason behind this decision was time constraint, since by doing so, I'm required to almost re-write the whole paper.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
