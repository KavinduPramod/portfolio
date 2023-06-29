import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <p className=' text-xl mt-20'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum blanditiis culpa repellat possimus iusto ullam, dolores minus suscipit facilis quidem doloremque illo est deserunt sed animi! Officia, eius. Provident porro, ipsa aliquid temporibus neque perferendis nobis doloribus deserunt repellendus at impedit culpa, libero officia reiciendis quaerat voluptates? Odio, reiciendis sunt.
        </p>
        <br />
        <p className=' text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima culpa similique rem blanditiis maiores, illo officiis cumque beatae ex quidem dolorem modi deserunt! Amet!
        </p>
      </div>
    </div>
  )
}

export default About
