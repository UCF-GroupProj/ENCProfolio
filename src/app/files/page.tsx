import Topbar from '../Component/topbar';
import Header from '../Component/header';
import style from './page.module.css';
import EmbedCard from '../Component/embedCard';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Artifacts" subtext='This page should contain all the artifact that was used in this portfolio'/>
      <div className={style.eCardContainer}>
        <EmbedCard title="Assignment/MA 1" link="https://zhiyan114assignment.blogspot.com/2023/09/stop-nickel-and-diming-college-student.html"/>
        <EmbedCard title="Assignment/MA 2" link="https://docs.google.com/document/d/e/2PACX-1vRXGOAS4x9y-olj90niDFvTDUewySxU0c-jY__REY602xwNb_BDXP0bArmMswQP4g47MkIbX_FSvH4c/pub?embedded=true"/>
        <EmbedCard title="Assignment/MA 3" link="https://cdn.zhiyan114.com/download/32b4dd81-4ff3-4c6a-b726-cbfbce3c4712?web=1"/>
        <EmbedCard title="Assignment/MA 4" link="https://docs.google.com/document/d/e/2PACX-1vTBqFtRgfpnBy7RpK_VGvlWJeaMJXaLJxfIO4jp9OpTuMVFokjAzuJtZpmucWRirUYSRkerWT92bolz/pub?embedded=true"/>
        <EmbedCard title="Assignment/MA 1 Draft" link="https://zhiyan114assignment.blogspot.com/2023/09/stop-nickel-and-diming-college-students.html"/>
        <EmbedCard title="Assignment/MA 4 Draft" link="https://docs.google.com/document/d/e/2PACX-1vQ3Q1tfQS9R7D9ZB9QjPfk5c6jxZjAFgvm5QT4XHL-wZhzt7mnicGYejfqJ09WOy0anZkohr9XcwKL0/pub?embedded=true"/>
        <EmbedCard title="Teacher Conference 1" link="/ConferenceNote1.txt"/>
        <EmbedCard title="Outcome 1 Reflection" link="https://docs.google.com/document/d/e/2PACX-1vS3pHmjUutg2M9f9ZxlbFslWDIdGIxYKQQoyren9FTkud9wODviXiKORk4l_QL1df3bgJXII6bg1TXj/pub?embedded=true"/>
        <EmbedCard title="Outcome 2 Reflection" link="https://docs.google.com/document/d/e/2PACX-1vRx0YBGbnMj3j6OKYzykrUlwywzt6TMyZmFvWoiCvADc8_j4DrXsIpYerX0mTby_z1oeDYtUng1M1gq/pub?embedded=true"/>
      </div>
    </Fragment>
  )
}
