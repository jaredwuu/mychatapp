import React from 'react';
import onlineIcon from '../../../images/onlineIcon.png'


const TextContainer = ({ users }) => (
  <div className="hidden lg:block flex flex-col justify-between w-1/4 h-3/5 text-white border-2 border-white mx-6 opacity-50">
    <div className="text-left py-4 px-3">
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div className="text-left px-3">
            <h1>People currently chatting:</h1>
            <div className="mb-52">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="flex items-center">
                    <img className='px-2' alt="Online Icon" src={onlineIcon}/>
                    {name}                    
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;