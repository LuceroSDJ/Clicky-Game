import React from "react";
import "./style.css";


// function DessertCard(props) {
class DessertCard extends React.Component {
  state = {
    isClicked: "false"  
  };

  twoFunctions = () => {
    //console.log(this.state.isClicked);
    //this.setState({ isClicked: "true" });
    //console.log(this.state.isClicked);
    //onClick add one to score
    //on Click change default value to true
    if(this.state.isClicked === "true") {
      //create resetGame in app.js
      console.log("resetting game");
      this.props.resetGame();
      this.setState({ isClicked: "false" })
      // this.props.isClicked=true
    } else {
      this.setState({ isClicked: "true" })
      //this.setState({ count: this.state.count + 1});
      console.log(this.state.isClicked);
      this.props.handleIncrement(this.props.id);
    }
  };

  

  render() {
    //this.setState({isClicked: this.props.isClicked});
    if(this.props.reset){
      this.setState({isClicked: "false"})
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="img-container">
            {/* commented out line 11 to test line handling increments & pushing into new array */}
            {/* default value set to false */}
            {/* <img value={props.isClicked} alt={props.name} src={props.image} onClick={() => twoFunctions()}/> */}
            <img value={this.state.isClicked} alt={this.props.name} src={this.props.image} onClick={() => this.twoFunctions()}/>
            {/* test did not work. Check syntax */}
            {/* <img alt={props.name} src={props.image} onClick={() => 
            (
              props.handleIncrement
              props.pushIntoNewArray(props.id)

            ) 
            }/> */}
          </div>
          {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
          </button> */}
          {/* <p>Click Count: {props.handleIncrement}</p> */}
        </div>
      </div>
    );
  };
}


export default DessertCard;