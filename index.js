import React from "react";
import ReactDOM from "react-dom";
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



// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Войти</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Выйти</button>;
// }

// // ReactDOM.render(
// //   // Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
// //   <Greeting isLoggedIn={false} />,
// //   document.getElementById('root')
// // );

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Здравствуйте!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>У вас {unreadMessages.length} непрочитанных сообщений.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re:Re: React"];
// // ReactDOM.render(
// //   `<Mailbox unreadMessages={messages} />`,
// //   document.getElementById('root')
// // );

// ReactDOM.render(<LoginControl />, document.getElementById("root"));


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода закипит.</p>;
  }
  return <p>Вода не закипит.</p>;
}

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Введите температуру в градусах Цельсия:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />
) 

































