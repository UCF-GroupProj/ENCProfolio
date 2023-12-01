import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing Processes" subtext='Students will be able to describe and reflect on writing processes in order to flexibly adapt them to support their goals'/>
      <div className="cardContainer">
        <ContentCard image="Blogv2.png">
          <p>There's several reason I've chosen blog. One of it's nature of allowing me to create a professional page to express my concern, while also allowing other multi-media, such as images. It's also allowed me to format the page flexibly with a few clicks and has enough features to design what I need.</p>
        </ContentCard>
        <ContentCard image="/MA2.png">
          <p>For the MA2, the goal is to analyze the choices we made for the writing. But acknowleging the limitation of your choices is also an important factors. Here, dispite there being several limitation with the audience I've selected, I still went for it because other external factors will make up for the limitation.</p>
        </ContentCard>
        <ContentCard image="/Outcome1.png">
          <p>For this artifact, it shows the process during my topic selection. While I'm passionate with both topics, the "stop paid textbooks" allowed me to design my argument in more effective way, by not only allowing me to select a very specific audience, but also an action that the reader themselves can immediate take.</p>
        </ContentCard>
        <ContentCard image="/MA4_writing.png">
          <p>For the MA4, we're writing an analysis argument towards college student. In this case, I have to make an assumption that no all college student knows the topic and quoting it gives my reader a quick reference of what I'm discussing.</p>
        </ContentCard>
        <ContentCard image="/Outcome2_writing.png">
          <p>For this artifact, I find it quite crucial with my writing process because doing the assignment forces me to think from multiple perspective, and now I'm able to successfully pick up that skills and use it for any future arguments.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
