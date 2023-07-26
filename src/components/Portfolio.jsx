import React from 'react';
import blockThief from '../assets/portfolio/BlockthiefLogo.png';
import calculator from '../assets/portfolio/Calculator.png';
import chatbot from '../assets/portfolio/Chatbot.png';
import meadDb from '../assets/portfolio/mealDb.png';
import musicPlayer from '../assets/portfolio/MusicPlayer.png';
import snameGame from '../assets/portfolio/Snakegame.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Blockthief',
      src: blockThief,
      codeLink: 'https://github.com/leptonworks/blocktheif-system.git',
      demoLink: 'https://example.com/blockthief-demo' // Replace with the actual demo link or remove if not available
    },
    {
      id: 2,
      title: 'Calculator',
      src: calculator,
      codeLink: 'https://github.com/KavinduPramod/react_calculator.git',
      demoLink: 'https://example.com/calculator-demo' // Replace with the actual demo link or remove if not available
    },
    {
      id: 3,
      title: 'Chatbot',
      src: chatbot,
      codeLink: 'https://github.com/KavinduPramod/RobinsoN_chatbot.git',
      demoLink: 'https://example.com/chatbot-demo' // Replace with the actual demo link or remove if not available
    },
    {
      id: 4,
      title: 'MealDB',
      src: meadDb,
      codeLink: 'https://github.com/KavinduPramod/TheMealDB.git',
      demoLink: 'https://example.com/mealdb-demo' // Replace with the actual demo link or remove if not available
    },
    {
      id: 5,
      title: 'Music Player',
      src: musicPlayer,
      codeLink: 'https://github.com/KavinduPramod/Robinson-MusicPlayer.git',
      demoLink: 'https://example.com/musicplayer-demo' // Replace with the actual demo link or remove if not available
    },
    {
      id: 6,
      title: 'Snake Game',
      src: snameGame,
      codeLink: 'https://github.com/KavinduPramod/Snake_Game.git',
      demoLink: 'https://example.com/snakegame-demo' // Replace with the actual demo link or remove if not available
    },
  ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-full'>
          {portfolios.map(({ id, title, src, codeLink, demoLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-110' />
              <div className='flex items-center justify-center w-full'>
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-400 hover:scale-105'>Demo</a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-400 hover:scale-105'>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
