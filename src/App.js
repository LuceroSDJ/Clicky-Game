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
    initializeNewArray: [],
    clicked: false
  };
  
  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1,
        clicked: true
      });
      console.log(this.state.count);

  };

  // if same image is clicked twice, reset score back to zero
  doubleClicked = () => {
    this.setState({
      clicked: false,
      score: 0
    });
  };

  imageClick = () => {
    let clicked=false
    if(clicked) {
      this.handleIncrement();
    }
    else {
      this.doubleClicked();
    }
  }


  render() {
    return (
      <Wrapper>
      <Nav>Clicky Game!
        Score={this.state.count}
      </Nav>
        <Title>Desserts</Title>
        {/* The map() method takes in desserts array & creates a new array */}
        {desserts.map(dessert => (
          <DessertCard
            id={dessert.id}
            key={dessert.id}
            image={dessert.image} 
            handleIncrement={this.handleIncrement}
            //remove this line below
            ClickCount={this.state.count}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
