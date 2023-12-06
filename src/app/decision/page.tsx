import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import EmbedContentCard from '../Component/embedContentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Decision Making"/>
      <div className="cardContainer">
        <EmbedContentCard link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110267&authkey=!AG3RSoPI17lm3HY&em=2">
          <p>This is MA1, annotated with highlights so that the first highlights color code each element of the exigence. Past that, the yellow highlights identify a constraint or rhetorical element, the the red highlights are the ways that I compensate for that constraint..</p>
        </EmbedContentCard>
        <ContentCard image='./decision-making/informal.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>Correspondence with a professor can use a professional tone, but my professor is close enough to me in age, as well as being friendly enough that I felt it was in context to use contractions and language casually; I wrote akin to how I talk. E.g., I used filler words such as “actually”, and avoided technical sentences.</p>
        </ContentCard>
        <ContentCard image='./decision-making/ka.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>I assumed my audience to be familiar with references like “Knewton Alta” and other specific terms, I did not explain them. Indeed, to save space, which is vital in an email, I rather took an opportunity to form an acronym out of the word.</p>
        </ContentCard>
        <ContentCard image='./decision-making/understanding.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>I recognized that my audience had actively formed their stance that the Knewton Altas <em>and</em> that my professor is inherently more knowledgeable. Unless I demonstrated a humble attitude and sufficient understanding of his stance, I would not have enough ethos for him to hear me out on my argument. So, I focused on conveying my own understanding of his perspective rather than trying to prove my own.</p>
        </ContentCard>
        <ContentCard image='./decision-making/enjoy.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>I ultimately want to have a good relationship with the professor, and so in the last paragraph, I express my enjoyment of his class and of him, rather than simply saying that my point is correct and he needs to change.</p>
        </ContentCard>
      </div>
      
    </Fragment>
  )
}
