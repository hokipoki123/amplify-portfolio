import React from 'react'
import { Button } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function footer() {
  return (
    <div>
      <h3>Contact me</h3>
      <p>Phone: 0226260590</p>
      <p>Email: allieshirer96@gmail.com</p>
      <a href="https://www.linkedin.com/in/allie-shirer-35947125a/"><Button variation="menu">LinkedIn</Button></a>
    </div>
  )
}

export default footer
