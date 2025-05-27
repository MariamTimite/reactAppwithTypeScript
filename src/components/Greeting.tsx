// ----- Code 01 : Conversion de Greeting en TypeScript -----
import React from 'react';
import '../styles/App.css';

// Définition de l'interface pour les props
type GreetingProps = {
  name: string;
};

// Composant fonctionnel avec typage
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;