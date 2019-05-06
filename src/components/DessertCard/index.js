import React from "react";
import "./style.css";


function DessertCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
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