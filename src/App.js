import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = process.env.REACT_APP_CONNECTION_LOCATION;

  useEffect(()=> {
    async function getBooks() {
      console.log(" async getBooks: start");
      setIsLoading(true);
      const response = await fetch(location);
      const body = await response.json();
      console.log(` async getBooks: received response ${JSON.stringify(body)}`);
      console.log(body);
      setBooks(body);
      setIsLoading(false);
      console.log(" async getBooks: done");
    }
    getBooks();
    console.log("useEffect: back after getBooks");
    console.log("useEffect: done");
  },[]);

  return (
    <div className={"App"}>
      {isLoading ? <p>LOADING DATA!!!</p> : false}
      {books.map((b) => <p key={b.title}>{b.title}</p>)}
    </div>
  );
}

export default App;
