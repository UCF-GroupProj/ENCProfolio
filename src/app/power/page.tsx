import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Writing and Power" subtext='Students will be able to critically examine and act on the relationship among identity, literacy, language, and power'/>
      <div className="cardContainer">
        <ContentCard image="MA1_power.png">
          <p>In this image, I wanted someone who has power (the professor) to make changes because my identity as a student was able to relate with other groups of students who are also overpaying for the materials. My belief or ideology, in this case, is the that I want college to be more affordable.</p>
        </ContentCard>
        <ContentCard image="MA4_power.png">
          <p>Throughout my MA4 assignment, I've discusses how many of the linguistic types are related to each other. The highlight shows one of the example of how a forum site built-up an ideology that any unhelpful posts will be berated and removed. By removing my most, it also shows that they have the power to do so. My parents are also another example. When they requested help, I'm expected to help because they have the power to do so, but it's also part of their ideology. This transform into part of my identity and ideology later on since now I'm not only used to it, but also believed in the same behavior.</p>
        </ContentCard>
        <ContentCard image="Brant_Power.png">
          <p>For this piece of artifact, it allows me to further understanding that an individuals power in the society can greatly affect ones ability to acquire literacy from another source.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
