import React from "react";
import "./style.css";


function DessertCard(props) {
  function twoFunctions() {
    props.handleIncrement(props.id)
    console.log()
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="img-container">
          {/* commented out line 11 to test line handling increments & pushing into new array */}
          <img alt={props.name} src={props.image} onClick={() => twoFunctions()}/>
          
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
}


export default DessertCard;