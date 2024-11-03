import React from 'react';

const GodotGame = () => {
  return (
    <iframe
      title="Godot Game"
      src="/index.html"  // Path to your exported Godot game
      style={{ width: '100%', height: '100vh', border: 'none', borderRadius: '100px' }}
      allowFullScreen
    />
  );
};

export default GodotGame;