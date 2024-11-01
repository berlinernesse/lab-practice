import { useState } from 'react';
import React from "react";
import CodeSample1 from "./components/Code1";
import './App.css';

const App = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      dateOfBirth: "1995-01-01",
      favoriteFood: "Pizza",
      favoriteEmoji: "🍕",
      birthplace: "Toronto"
    },
    {
      name: "Bob Smith",
      dateOfBirth: "1997-03-15",
      favoriteFood: "Sushi",
      favoriteEmoji: "🍣",
      birthplace: "Vancouver"
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <div>
        <button onClick={() => setSelected("1")}>Code Sample 1</button>
        <p>Fuck you ness, how can a person be soo mean?</p>
=======
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Team Member Profiles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">{member.name}</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Date of Birth:</span>
                  <span>{member.dateOfBirth}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold">Favorite Food:</span>
                  <span>{member.favoriteFood}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold">Favorite Emoji:</span>
                  <span className="text-2xl">{member.favoriteEmoji}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold">Birthplace:</span>
                  <span>{member.birthplace}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 70d9893fcc96ebc068e44eef1c22b30b7d3c73d8
      </div>
    </div>
  );
};

export default App;
