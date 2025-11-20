import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-4 w-2/3 '>
      {props.placed.map(function(elem, idx){
        return <Rightcard key={idx} id={idx} img={elem.img} name={elem.name} words={elem.words} />
      })}
    </div>
  )
}

export default RightContent
