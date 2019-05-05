import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PaintingCard from "./components/PaintingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import paintings from "./paintings.json";

function App() {
  // Setting this.state.paintings to the paintings json array
  // state = {
  //   paintings
  // };

  return (
    <Wrapper>
      <Title>Paintings List</Title>
      {this.state.paintings.map(painting => (
        <PaintingCard
          id={painting.id}
          key={painting.id}
          image={painting.image}
        />
      ))}
    </Wrapper>
  );
}

export default App;
