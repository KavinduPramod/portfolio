import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <p className='text-xl mt-20'>
            Hello! I'm Kavindu pramod, a student at Informatics Institute of Technology (IIT) in Sri Lanka, pursuing BSc in Computer science. Welcome to my portfolio website!
        </p>
        <br />
        <p className='text-xl'>
            On this website, you will find everything about me, including most of my projects which you can explore in the Portfolio section. All the project codes are available on my GitHub profile.
        </p>
        <br />
        <p className='text-xl'>
            Feel free to contact me through the provided details below. You can also download my resume if needed. Connect with me on LinkedIn using the provided profile link, and don't forget to check out my GitHub for more projects and contributions!
        </p>
      </div>
    </div>
  )
}

export default About;
