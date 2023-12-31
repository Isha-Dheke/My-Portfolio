import React from 'react'

const ProjectItems = ({img,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-blue-950'>
        <img src={img} alt='/' className='rounded-xl hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 font-bold text-white text-center'>REACT JS</p>
            <a href='/' className='border text-center p-3 bg-white text-gray-700 font-bold cursor-pointer text-lg rounded-lg'> More Info</a>
        </div>
    </div>
  )
}

export default ProjectItems