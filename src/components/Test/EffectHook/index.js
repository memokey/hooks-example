import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h3>Example for Effect hook.</h3>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default EffectHook;