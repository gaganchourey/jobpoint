import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    <div className=' absolute top-0 left-0 h-full w-full p-6! flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div className='text-lg leading-normal'>
                <h2 className='text-xl leading-none text-while text-white'>{props.name}</h2>
                <p className='text-xl leading-none text-while mb-10! text-white'>{props.words}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded-full!' >Placed</button>
                    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded-full! ' ><ArrowRight size={20} /></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent
