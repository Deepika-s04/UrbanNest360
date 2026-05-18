

// // src/hooks/useFavorites.js
// import { useState, useEffect } from "react";

// export function useFavorites() {
//   const [favorites, setFavorites] = useState([]);

//   const getToken = () => localStorage.getItem('token');

//   useEffect(() => {
//     const token = getToken();
//     if (!token) return;

//     fetch('http://localhost:5000/api/favorites', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => {
        
//         setFavorites((data.favorites || []).map(id => String(id)));
//       })
//       .catch(err => console.error('Failed to fetch favorites:', err));
//   }, []);

//   const toggleFavorite = async (propertyId) => {
//     const token = getToken();
//     if (!token) return;

    
//     const id = String(propertyId);

//     try {
//       const res = await fetch('http://localhost:5000/api/favorites/toggle', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ propertyId: id })
//       });
//       const data = await res.json();
      
//       setFavorites((data.favorites || []).map(id => String(id)));
//     } catch (err) {
//       console.error('Failed to toggle favorite:', err);
//     }
//   };

  
//   const isFavorite = (id) => favorites.includes(String(id));

//   return { favorites, isFavorite, toggleFavorite };
// }





// // src/hooks/useFavorites.js


// import { useState, useEffect } from "react";

// export function useFavorites() {
//   const [favorites, setFavorites] = useState([]);

//   const getToken = () => localStorage.getItem('token');

//   useEffect(() => {
//     const token = getToken();
//     if (!token) return;

//     fetch(`${BASE_URL}/api/favorites`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => {
        
//         setFavorites((data.favorites || []).map(id => String(id)));
//       })
//       .catch(err => console.error('Failed to fetch favorites:', err));
//   }, []);

//   const toggleFavorite = async (propertyId) => {
//     const token = getToken();
//     if (!token) return;

    
//     const id = String(propertyId);

//     try {
//       const res = await fetch(`${BASE_URL}/api/favorites/toggle`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ propertyId: id })
//       });
//       const data = await res.json();
      
//       setFavorites((data.favorites || []).map(id => String(id)));
//     } catch (err) {
//       console.error('Failed to toggle favorite:', err);
//     }
//   };

  
//   const isFavorite = (id) => favorites.includes(String(id));

//   return { favorites, isFavorite, toggleFavorite };
// }




// src/hooks/useFavorites.js

import BASE_URL from '../config';
import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const getToken = () => localStorage.getItem('token');

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    fetch(`${BASE_URL}/api/favorites`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        
        setFavorites((data.favorites || []).map(id => String(id)));
      })
      .catch(err => console.error('Failed to fetch favorites:', err));
  }, []);

  const toggleFavorite = async (propertyId) => {
    const token = getToken();
    if (!token) return;

    
    const id = String(propertyId);

    try {
      const res = await fetch(`${BASE_URL}/api/favorites/toggle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ propertyId: id })
      });
      const data = await res.json();
      
      setFavorites((data.favorites || []).map(id => String(id)));
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  
  const isFavorite = (id) => favorites.includes(String(id));

  return { favorites, isFavorite, toggleFavorite };
}