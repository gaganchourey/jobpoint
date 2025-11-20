import { DivideCircle, Radius } from 'lucide-react'
import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl '>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        
        <Rightcardcontent id={props.id} name={props.name} words={props.words}/>
        </div>
        
  )
}

export default Rightcard
