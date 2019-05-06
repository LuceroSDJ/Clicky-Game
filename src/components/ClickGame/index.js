// import React from "react";
// import "./style.css";

// // By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//     // Setting the initial state of the Counter component
//     state = {
//       count: 0
//     };
    
//     // handleIncrement increases this.state.count by 1
//     handleIncrement = () => {
//         // We always use the setState method to update a component's state
//         this.setState({ count: this.state.count + 1 });
//         console.log(this.state.count);
//     };

//     // The render method returns the JSX that should be rendered
//     render(props) {
//         //here I want to keep track of the click events and update the nav bar score & Top Score
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     <div className="img-container">
//                     <img alt={this.props.name} src={this.props.image} onClick={this.props.handleClick}/>
//                     </div>
//                 </div>
//             </div>
//         );
        
//     // render() ends
//     }
// // React.Component ends
// }

// export default Counter;