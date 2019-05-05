import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DessertCard from "./components/DessertCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import desserts from "./desserts.json";

function App() {
  // Setting this.state.paintings to the paintings json array
  // state = {
  //   paintings
  // };

  return (
    <Wrapper>
      <Title>Desserts</Title>
      {/* The map() method takes in desserts array & creates a new array */}
      {desserts.map(dessert => (
        <DessertCard
          id={dessert.id}
          key={dessert.id}
          image={dessert.image}
        />
      ))}
    </Wrapper>
  );
}

export default App;
