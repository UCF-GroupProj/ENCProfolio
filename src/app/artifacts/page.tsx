import Topbar from '../Component/topbar';
import Header from '../Component/header';
import style from './page.module.css';
import EmbedCard from '../Component/embedCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Artifacts" subtext='This page contains all the original artifacts used in the website. Please note that annotated versions are not here.'/>
      <div className={style.eCardContainer}>
        <EmbedCard title="Assignment/MA 1" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110275&authkey=!ADPu-xArPk3-VkM&em=2"/>
        <EmbedCard title="Assignment/MA 1 Draft" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110279&authkey=!AFDQcCeixkTxfac&em=2"/>
        <EmbedCard title="Assignment/MA 2" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110277&authkey=!AI7VnrhQynMPB24&em=2"/>
        <EmbedCard title="Assignment/MA 2 Draft" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110281&authkey=!AHaHTTp1rkP94Dg&em=2"/>
        <EmbedCard title="Assignment/MA 3" link=""/>
        <EmbedCard title="Assignment/MA 4" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110283&authkey=!AMEe-eg7TxZT8iQ&em=2"/>
        <EmbedCard title="Assignment/MA 4 Draft" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110285&authkey=!AOuthF-RiGsTaV8&em=2"/>
        <EmbedCard title="MA1/MA2 Reflection" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110289&authkey=!AAht-e3sgT1MOnk&em=2"/>
        <EmbedCard title="MA3/MA4 Reflection" link="https://onedrive.live.com/embed?resid=F5390FD113483CC1%2110287&authkey=!ANGo6dCxwVZZ_V0&em=2"/>
        {/* <EmbedCard title="Literacy Freewriting" link=""/> */}
        <EmbedCard title="Exigence Highlighting" link="/writing-processes/highlighting.jpg"/>
        <EmbedCard title='Gee' link=''/>
        <EmbedCard title='Giles' link=""/>
      </div>
    </Fragment>
  )
}
