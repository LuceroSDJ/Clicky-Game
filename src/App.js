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
    welcome: "CLICK! CLICK! CLICK!"
  };

  // Note: "We only use this.state in the constructors"

  // handleIncrement increases this.state.count by 1
  handleIncrement = (id) => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1,
        clicked: true
      });
      console.log(this.state.count);

  };

  // I want to push the id or name of the clicked image into a new array. Use filter
  // so I need a check point to make sure only 1st time clicked images are pushed
  pushIntoNewArray = id => {
    // Filter this.state.newArray for desserts with an id not equal to the ids already pushed into the new array
    const initializeNewArray = this.state.initializeNewArray.filter(dessert => dessert.id !== id);
    this.setState({ initializeNewArray});
    console.log(initializeNewArray);
  };

  //if image is not found in the new array, push the name/id
  //if image is found in the new array, 
    // set score to zero
    // clear new array
  // conditions = () => {
  //   if(!initializeNewArray.includes(dessert.id) {
  //     handleIncrement(),
  //     pushIntoNewArray()
  //   });
  // }






  //PROVABLY NOT THE BEST OPTION🤔
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
    setTimeout(() => {
      this.setState({welcome: " 🍩 Do not click a desset twice! 🍮"});
    }, 3000)
    return (
      <Wrapper>
      {/* setState(INSTRUCTIONS) 😎 */}
      <Nav currentScore={this.state.count} instructions={this.state.welcome}> 
      {/* <Nav currentScore={this.state.count}>  */}
      Clicky Game! 
      {/* <span role="img" arial-label="cake">  🍩 </span> */}
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
