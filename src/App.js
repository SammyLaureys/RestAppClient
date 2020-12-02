import './App.css';
import {useEffect, useState} from "react";
import {CreateForm} from "./components/createform";
import {EditForm} from "./components/editform";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();
    const [isLoading, setIsLoading] = useState(false);

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
            {isLoading ? <p style={{background: "lightgrey"}}>LOADING DATA!!!</p> : false}
            {books.map((b) => <p key={b.title} onClick={() => setSelectedBook({...b})}>{b.title} - {b.author}</p>)}
            <CreateForm selectedBook={selectedBook} setIsLoading={setIsLoading} addBook={addBook}/>
            <EditForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} setIsLoading={setIsLoading}
                      updateBook={updateBook}/>
        </div>
    );
}

export default App;
