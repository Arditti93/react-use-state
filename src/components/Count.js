// The Effect Hook, just like the name implies, carries out an effect each time there is a state change. 
// By default, it runs after the first render and every time the state is updated.



// In the example below, we create a state variable count with an initial value of zero. 
// A button in the DOM will increase the value of this variable by one every time it is clicked. 
// The useEffect hook will run every time the count variable changes and then log out some information to the console.


import React from "react"
// The first line of code where you import the required hook(s) is always important if you are going to "hook" 
// into this React feature. We imported the two hooks we used above:

import { useState, useEffect } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    // Note that you can use the useEffect hook to achieve various effects like fetching data from an external 
    // API (which you will see in another section of this article), changing the DOM in your component, and so on.
    useEffect(() => {
        console.log(`You have clicked the button ${count} times`)
    });

    return (
        <div>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );

}

export default Count