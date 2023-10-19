import React from 'react'
import ProjectItems from './ProjectItems'
import artImg from '../assets/art.jpg'
import bookstoreImg from '../assets/bookstore.jpg'
import movieImg from '../assets/movie.jpg'
import nepalImg from '../assets/nepal.jpg'

const Projects = () => {
  return (
    <>
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='text-4xl font-bold text-center text-gray-800'>Projects</h1>
            <p className='text-center py-8'>I have created these projects using various language and frameworks. I am willing to learn more.</p>
            <div className=' grid sm:grid-cols-2 gap-12'>
                <ProjectItems img={artImg} title='Art App'/>
                <ProjectItems img={bookstoreImg} title='Book App'/>
                <ProjectItems img={movieImg} title='Movie App'/>
                <ProjectItems img={nepalImg} title='Nepal App'/>
            </div>
        </div>
    </>
  )
}

export default Projects