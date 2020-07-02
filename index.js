import React from 'react';
import ReactDOM from 'react-dom'
// import react-dom from 'react-dom';
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some `magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));

function UserGreeting(props) {
  return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
  return <h1>Войдите, пожалуйста.</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
