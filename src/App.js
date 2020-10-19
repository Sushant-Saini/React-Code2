import React from 'react';
import Footer from './Footer'
import Joke from './Joke'
import jokesData from './jokesData.js'

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return (
    <div className="App">
      {jokeComponents}      
      <Footer />
    </div>
  );
}

export default App;
