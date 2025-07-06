// src/context/StreamListContext.js
import React, { createContext, useState, useEffect } from 'react';

export const StreamListContext = createContext();

export const StreamListProvider = ({ children }) => {
  const [streamList, setStreamList] = useState(() => {
    const saved = localStorage.getItem('streamList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('streamList', JSON.stringify(streamList));
  }, [streamList]);

  const addToStreamList = (movie) => {
    setStreamList((prev) => {
      if (!prev.some((item) => item.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  return (
    <StreamListContext.Provider value={{ streamList, addToStreamList }}>
      {children}
    </StreamListContext.Provider>
  );
};

