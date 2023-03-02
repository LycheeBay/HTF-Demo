import React, { useState, useEffect } from 'react';

function Count(props) {
  // Define a state variable 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  // Define an effect that runs after every render
  useEffect(() => {
    document.title = `Count is ${count}`;
    if (count % 10 === 0) {
        //suggested by github copilot!
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Count;