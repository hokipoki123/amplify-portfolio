import React from 'react'
import { Button } from '@aws-amplify/ui-react'

function nav() {
  return (
    <div>
      {' '}
      <Button loadingText="" onClick={() => alert('hello')} ariaLabel="">
        Home
      </Button>
      <Button loadingText="" onClick={() => alert('bye')} ariaLabel="">
        Projects
      </Button>
    </div>
  )
}

export default nav
