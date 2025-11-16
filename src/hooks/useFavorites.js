// src/hooks/useFavorites.js
import { useState, useEffect } from "react";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthProvider";

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const fetchFavorites = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setFavorites(docSnap.exists() ? docSnap.data().favorites || [] : []);
    };
    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (propertyId) => {
    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const isFav = favorites.includes(propertyId);

    try {
      if (isFav) {
        await updateDoc(docRef, { favorites: arrayRemove(propertyId) });
        setFavorites(prev => prev.filter(id => id !== propertyId));
      } else {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await updateDoc(docRef, { favorites: arrayUnion(propertyId) });
        } else {
          await setDoc(docRef, { favorites: [propertyId] });
        }
        setFavorites(prev => [...prev, propertyId]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, isFavorite, toggleFavorite };
}