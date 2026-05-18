// // src/hooks/useSocket.js


// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000');

// export const useSocket = () => {
//   const [newProperty, setNewProperty] = useState(null);

//   useEffect(() => {
//     socket.on('new-property', (property) => {
//       console.log('New property received via Socket.io:', property.title);
//       setNewProperty(property);
//     });

//     return () => {
//       socket.off('new-property');
//     };
//   }, []);

//   return { newProperty };
// };



// src/hooks/useSocket.js
import BASE_URL from '../config';  // ← add this


const socket = io(BASE_URL);

import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(BASE_URL);

export const useSocket = () => {
  const [newProperty, setNewProperty] = useState(null);

  useEffect(() => {
    socket.on('new-property', (property) => {
      console.log('New property received via Socket.io:', property.title);
      setNewProperty(property);
    });

    return () => {
      socket.off('new-property');
    };
  }, []);

  return { newProperty };
};