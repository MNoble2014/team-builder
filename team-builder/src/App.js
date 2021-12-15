import React, { useState } from 'react'
import './App.css';
import Card from './components/Form.js';
import From from './components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState([
    {id: 0, name: "Henry", email: "nice@try", role: "TL"},
    {id: 1, name: "Bard", email: "not@this", role: "Dad"},
  ]);

  const addPerson = person => {
    setPeople([...people, {...person, id: Date.now()}]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
  }
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Route path="/add"
            render={props => <Form {...props}
          submitPerson={addPerson}
        buttonText="Add Person"
      />}/>
      <Route exact path="/"
      renter={props => people.map(person => <Card person={person}/>)}/>
      <Route path="/edit/:id"
      render {...props => {
        const person = people.find(person => person.id.toString() === props.match.params.id);
        return <Form {...props}
        initialPerson={person}
        submitPerson={editPerson}
        buttonText="Edit Person"
        />
      }}/>
    </div>
  );
}

export default App;
