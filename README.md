# reactAppwithTypeScript

Votre Objectif

 

Dans ce point de contrôle, vous allez convertir le code ci-dessous en Typescript.

Il vous est demandé de décrire les étapes que vous allez suivre pour effectuer les changements (créer un code bien commenté)

 


Instructions

Code 01 : 

import React from 'react'; 
const Greeting = ({ name }) => ; { 
return <div>Hello, {name} !</div>;
 };
 export default Greeting;

 
Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
 count : 0
 } ; increment = () => ; {
 this.setState({ count : this.state.count + 1 }); 
}; 
render() { 
return 
( <div> 
<p>Count : {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> ; );
 }
 } 
exporter le compteur par défaut;
