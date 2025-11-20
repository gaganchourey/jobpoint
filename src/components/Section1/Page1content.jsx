import React from 'react'
import Leftcontent from './Leftcontent'
import RightContent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10! flex items-center gap-10  h-[80vh] bg-white px-18 ml-20! mr-20! mt-5 mb-4'>
      <Leftcontent />
      <RightContent placed={props.placed}  />
      
    </div>
  )
}

export default Page1content
