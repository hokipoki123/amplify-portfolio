import React from 'react'
import { Link } from '@aws-amplify/ui-react';

function home() {
  return (
    <div>
      <h1>Howdy</h1>
    </div>
    
    <Link href="https://ui.docs.amplify.aws/react/components/link">
     My recursive link
    </Link>
  )
}

export default home
