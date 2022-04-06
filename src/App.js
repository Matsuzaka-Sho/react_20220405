import React, { Component } from 'react';
import PropTypes from 'prop-types';

//<User name={"Taro"}/> Taroという属性を与える。
const App = () => {
   const profiles = [
      {name: "Taro", age:10},
      {name: "Hanako", age:30},
      {name: "aaa", age: 56}
   ]
   return (
       <div>
         {
           profiles.map((profile, index) => {
             return <User name={profile.name} age={profile.age} key={index}/>
           })
         }
       </div>
   )
}

const User = (props) => {
   return <div>Hi, I am {props.name}, and {props.age} years old</div> // conponentsは使いまわしできる
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
