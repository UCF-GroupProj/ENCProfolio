import Header from '../Component/header';
import Topbar from '../Component/topbar';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Variation Context" subtext='Students will be able to identify, analyze, and reflect on variation in rhetorical and linguistic patterns, including their own, from a range of contexts (e.g cultural, digital, workplace, and/or academic)'/>
      <div className="cardContainer">
        <ContentCard image='/MA2_context.png'>
          <p>For the MA2, I was able to demonstrate skill by analyzing deeper into why my target audience may not want to stop using textbook. By doing this, it shows that I'm able to analyze from multiple perspective and reasoning rather than guessing one.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
