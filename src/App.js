import './App.css';
import React, {useEffect, useState} from "react";
import {CreateForm} from "./components/createform";
import {EditForm} from "./components/editform";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    console.log("render App()");

    function addBook(book) {
        setBooks([...books, book]);
    }

    function updateBook(book) {
        setBooks(books.map((b) => b.id === book.id ? book : b));
    }

    useEffect(() => {
        console.log("useEffect: start");

        async function getBooks() {
            console.log("   async getBooks: start");
            setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`);
            const body = await response.json();
            console.log(`   async getBooks: received response ${JSON.stringify(body)}`);
            setBooks(body);
            console.log("   async getBooks: done");
            setIsLoading(false);
        }

        getBooks();
        console.log("useEffect: back after getBooks");
        console.log("useEffect: done");
    }, []);

    return (
        <div className="App">
            {isLoading ? <p style={{background: "orange", color: "black"}}>LOADING DATA!!!</p> : false}
            {error ? <p style={{background: "orange", color: "black"}}>SOMETHING WENT WRONG!!!</p> : false}
            {books.map((b) => <p key={b.title} onClick={() => setSelectedBook({...b})}>{b.title} - {b.author}</p>)}
            <CreateForm selectedBook={selectedBook} setIsLoading={setIsLoading} setError={setError} addBook={addBook}/>
            <EditForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} setIsLoading={setIsLoading} setError={setError}
                      updateBook={updateBook}/>
        </div>
    );
}

export default App;
