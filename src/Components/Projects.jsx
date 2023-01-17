import React from 'react'
import { Button } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import Woab from '../../src/images/WOAB.PNG'


function projects() {
  return (
    <div>
      <h2>My projects</h2>
      <p>Firstly there is of course this portfolio I have been working on. It is basic but I wanted to show I can create something.</p>
      <a href="https://github.com/hokipoki123/amplify-portfolio"><Button variation="menu">My portfolio code</Button></a>
      <p>Another project I worked on was a week-long group project at Dev Academy which we called Wellington on a Beach. The premise was that we wanted a website showing which Wellington beach was worth swimming at on a given day. The APIs may or may not be working simply due to the cost of calling the APIs. Within this project, I focused a lot on linking things together, particularly in both the frontend and backend. I also ended up being an impromptu scrum master which was interesting, particularly when trying to prevent the people working on CSS from over fixating.</p>
      <img className="Picture" src={Woab} alt="Welly on a Beach"/>
      <p></p>
      <a href="https://woab.devacademy.online/"><Button variation="menu">Wellington on a Beach</Button></a>
    </div>
  )
}

export default projects
