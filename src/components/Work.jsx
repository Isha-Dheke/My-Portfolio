import React from 'react'
import WorkItem from './WorkItem'

const data =[
    {
        year: 2018,
        title:'Content Writing',
        duration:'2 months',
        details: 'I am Isha Dheke. I worked as a content writer for some months.'
    },
    {
        year: 2019,
        title:'Content Creator',
        duration:'8 months',
        details: 'I am Isha Dheke. I worked as a content creator for some months.'
    },
    {
        year: 2021,
        title:'Teacher',
        duration:'1.5 years',
        details: 'I am Isha Dheke. I worked as a teacher for some years.'
    },
    {
        year: 2023,
        title:'Frontend Developer',
        duration:'1.5 years',
        details: 'I am Isha Dheke. I worked as a frontend developer for some years.'
    }
]

const Work = () => {
  return (
    <>
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='text-4xl font-bold text-center text-gray-800'>Work</h1>
            {data.map((item, id)=>(
                <WorkItem
                    key={id}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    </>
    
  )
}

export default Work