import React from 'react'

const Contact = () => {
  return (
    <>
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='text-4xl font-bold text-center text-gray-800'>Contact</h1>
            <form action='https://getform.io/f/45a2785e-544b-4366-b3e4-414c4c3fc380' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' >Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone number'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} name='message'/>
            </div>
            <button className='border-2 rounded-lg p-2 w-full bg-blue-950 text-gray-300'>
                Send message
            </button>
            </form>
        </div>
    </>
  )
}

export default Contact