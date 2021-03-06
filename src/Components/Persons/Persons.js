import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    //only wrap components that might throw errors our of your control with ErrorBoundary
    return <ErrorBoundary key={person.id}>
      <Person 
        click={() => props.clicked(index)}
        name={person.name} 
        age={person.age}
        changed={(event) => props.changed(event, person.id)} />
      </ErrorBoundary>
  })
}

export default persons;