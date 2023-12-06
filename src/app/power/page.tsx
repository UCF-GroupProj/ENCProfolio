import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import EmbedContentCard from '../Component/embedContentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Power in Writing"/>
      <div className="cardContainer">
        <EmbedContentCard link="https://www.youtube.com/embed/3TbCITUyZ-Y?si=PkE6Z6bRa2-779YT">
          <p>This video is the first video I ever had used a professional video editing software with, and though I did not utilize it to its fullest, I have now the experience and the ability to empower my works with a new form of media.</p>
        </EmbedContentCard>
        <EmbedContentCard link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110271&authkey=!ADoWUB3QPp3UJtA&em=2">
          <p>The excerpt to the left is from MA3, which focused on analyzing literacy, power, and identity. The highlighted sections are key relationships to power which I identify. I would like to point out as well that although not specifically mentioned, sponsorship and power are <em>very</em> related. Adam Ragusea and my mother both appeared as sponsors in my life, both leaving lasting impacts on my habits, and by that way they have power over me.</p>
        </EmbedContentCard>
        <ContentCard image='./power/ma1.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>It is very easy to see the teacher in power over the student, however the teacher actually has a responsability to a student to provide the best education, which means that when a student claims they do not have the best education, they have power. I used this to my advantage in MA1.</p>
        </ContentCard>

      </div>
      
    </Fragment>
  )
}
