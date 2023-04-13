import React from 'react'
import ContentText from './content-context/index'
import MyGit from './my-git/index'
import MyWorks from './myWorks/index'

const content = () => {
  return (
    <div>
        <ContentText/>
        <MyGit/>
        <MyWorks/>

    </div>
  )
}

export default content