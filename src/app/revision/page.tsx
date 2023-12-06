import Topbar from '../Component/topbar';
import Header from '../Component/header';
import ContentCard from '../Component/contentCard';
import { Fragment } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <Topbar/>
      <Header text="Revision"/>
      <div className="cardContainer">
        <ContentCard image='./revision/better wording ma1.png' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>Here is a specific instance where I went to my roomate for revision. I do not normally go to people for revision, but the mandatory peer reviews on my paper were not particularly helpful, only saying that I did a good job. I took my paper to my roomate, then and something that he pointed out is that the draft (on top) sounded snarky.</p>
        </ContentCard>
        <ContentCard image='./revision/teach rev.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>Although I never re-wrote MA4 according to my professor's feedback, I did still read that feedback. It was hard for me to read, though, as I have only ever taken very easy english classes. The feedback I recieved was largely on my organization style, in the rubric to the left the lowest section there, only one away from the bottom, is my organization. I think that more than really teaching me any hard revision skills, the class has opened my eyes to the need for revision, apparent from this feedback, aswell as the tools, such as my dormmates, the on-campus writing center, and the professor themselves.</p>
        </ContentCard>
        <ContentCard image='./revision/giles-reflection.jpg' img={{maxWidth: "40rem", maxHeight: "40rem"}}>
          <p>A tool which I never got to use, but which I learned through this class is a "letter to the reader". In an <Link target='_blank' href={"https://wac.colostate.edu/docs/books/writingspaces1/giles--reflective-writing-and-the-revision-process.pdf"}>assigned reading by Sandra Giles</Link> I learned the importance of revision and reflection in a writer's skill, and part of teaching that ability to self reflect was this letter to a reader. The concept of it is essentially to describe what the paper should accomplish, as well as some of the weaker parts of it. In a way, the analysis papers after MA1 and MA3 function to the same effect, and the reflection assigments especially which were assigned after each unit helped me to see where I was weakest, as I had to write and point out where my argument might need work.</p>
        </ContentCard>
      </div>
    </Fragment>
  )
}
