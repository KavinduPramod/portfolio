import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing left and right arrows

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(true); // State to track if links are open or folded

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kavindupramod/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/KavinduPramod",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kavindupramod55@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "Kavindu Abeysundara.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] ml-2 fixed">
      {/* Fold/Expand Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white ml-2 mb-4 mx-auto flex items-center justify-center bg-cyan-500 p-3 rounded-full shadow-md hover:bg-cyan-600 duration-300"
        style={{ marginTop: '120px' }} // Added margin-top to give some space from the top
      >
        {isOpen ? (
          <FiChevronLeft size={25} /> // Use FiChevronLeft for fold (left arrow)
        ) : (
          <FiChevronRight size={25} /> // Use FiChevronRight for expand (right arrow)
        )}
      </button>

      {/* Social Links */}
      {isOpen && (
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SocialLinks;
