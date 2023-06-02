// The state of your application is bound to change at some point. 
// This could be the value of a variable, an object, 
// or whatever type of data exists in your component.

// To make it possible to have the changes reflected in the DOM, 
// we have to use a React hook called useState. It looks like this:

import React from "react";

// To be able to use this hook, you have to import the useState hook from React.
import { useState } from "react";

const App = () => {
  // After that, you have to create your state and give it an initial value (or initial state) which is "ALex". 
  // The state variable is called name, and setName is the function for updating its value.

  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          // Here, we use the onChange event listener which waits for any value change in the input field.
          // Whenever there is a change, an anonymous function 
          // (which takes in the event object as a parameter) 
          // is fired which in turn calls the setName() 
          // function to update the name variable with the current value of the input field.
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
      
    </div>
  );
};

export default App;
