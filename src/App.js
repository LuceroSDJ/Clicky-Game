import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DessertCard from "./components/DessertCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import desserts from "./desserts.json";



// By extending the React.Component class, Counter inherits functionality from it
class App extends React.Component {
// function App() {

  // Setting the initial state of the Counter component
  state = {
    count: 0,
    welcome: "CLICK! CLICK! CLICK!",
    desserts,
    topScore: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({welcome: " 🍩 Do not click a desset twice! 🍮"});
    }, 3000);
  }

  // DOCUMENTATION: "We only use this.state in the constructors"

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1, desserts:this.shuffle(desserts)
        // clicked: true
      });
      console.log(this.state.count);
  };

  topScore = () => {
    if(this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count});
    }
  }

  //reset game
  resetGame = () => {
    this.setState({ count: 0});
    //reset image value to false 
    console.log("resetting game at app js")
  };

  shuffle = (array) => {
    array.sort(() => Math.random()- 0.5)
    return array;
  };

  render() {
    //console.log("im calling render again");
    return (
      <Wrapper>
      {/* setState(INSTRUCTIONS) 😎 */}
      <Nav currentScore={this.state.count} instructions={this.state.welcome}> 
      {/* <Nav currentScore={this.state.count}>  */}
      Clicky Game! 
      <span role="img" arial-labellby= "🍩" />
      </Nav>
        <Title>Desserts</Title>
        {/* The map() method takes in desserts array & creates a new array */}
        {desserts.map(dessert => (
          <DessertCard
          // initializeNewArray={this.pushIntoNewArray}
          id={dessert.id}
          key={dessert.id}
          image={dessert.image} 
          handleIncrement={this.handleIncrement}
          resetGame={this.resetGame}
          //register click: commented out button below each image(to be deleted)
          // ClickCount={this.state.count}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
