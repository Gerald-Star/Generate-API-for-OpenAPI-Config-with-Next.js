/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {

  const [counter, setCounter] = useState(0); // you set up the state by using set<>
  const [animalInput, setAnimalInput] = useState(0);


  //setup a function onSubmit on the form and remove the onClick() on the input type ="submit"
  // use async await function to fetch the API request and set the method, headers  and body JSON.stringify

  async function onSubmit(e) {
    e.preventDefault()
    
    if (counter == 10) {
      return console.log('You have reached your limit')
    }
    setCounter(counter + 1)
    setAnimalInput("") // this refreshes the button to an empty string

  }

  return (
    <>
      <div>
      <Head>
          <title>Create a React App</title>
          <link rel="icon"  href="/favicon.ico"></link>
        </Head>
        <main>
          <img src="/favicon.ico" />
          <h1>Name my Pet!</h1>
          <p> How many times you use the app {counter} times</p>

          <form onSubmit={onSubmit}>
            <input type="text"
              name="animal"
              value={animalInput}
              onChange={(e) => {
                setAnimalInput(e.target.value)
                console.log(animalInput)
              }}
              placeholder="Enter an animal"
            />

            <input type="submit"
              value="Generate names"
      
        
              
            />
          </form>
        </main>

    </div>
    
    </>
    
  );
}

