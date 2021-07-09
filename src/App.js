import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(res => {
        console.log('Output: ', res);
      });
  }, []);

  return (
    <div>
      <h3>How to set up a proxy in React App - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer">Clue Mediator</a></h3>
      <p>Open Console to check the logs.</p>
    </div>
  );
}

export default App;
