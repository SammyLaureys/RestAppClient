import './App.css';
import {useEffect, useState} from "react";
import {CreateForm} from "./components/createform";
import {EditForm} from "./components/editform";
import {Book} from "./components/book";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();


    console.log("render App()");


    async function createBook(book) {
        console.log(`async createBook ${JSON.stringify(book)}`);
        setIsLoading(true);

        const fetchOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(book)
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`, fetchOptions);
            const body = await response.json();
            if (response.ok) {
                console.log(`   async createBook: received response ${JSON.stringify(body)}`);
                setBooks([...books, body]);
                console.log("   async createBook: done");
                setMessage(`book ${book.title} created`);
            } else {
                console.log(`   async createBook: ERROR: ${response.status} - ${body.error} - ${body.message} `);
                const errorMessage = body.errors &&
                    body.errors.reduce((accumulator, error) => `${accumulator} ${error.defaultMessage}  --- `, "--- ");
                console.log(`   ${JSON.stringify(body)}`);
                console.log(`   ${errorMessage}`);
                setMessage(errorMessage || body.message);
            }
        } catch (e) {
            console.log(`   async createBook: ERROR ${e}`);
            setMessage("Connection error");
        }
        setIsLoading(false);
    }

    async function editBook(book) {
        if (!selectedBook) return;
        console.log("async editBook");
        setIsLoading(true);

        const fetchOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(book)
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}/${book.id}`, fetchOptions);
            const body = await response.json();
            if (response.ok) {
                console.log(`   async editBook: received response ${JSON.stringify(body)}`);
                setBooks(books.map((b) => b.id === body.id ? body : b));
                console.log("   async editBook: done");
                setMessage(`book ${book.title} modified`);
            } else {
                console.log(`   async editBook: ERROR: ${response.status} - ${body.error} - ${body.message} `);
                setMessage(body.message);
            }
        } catch (e) {
            console.log(`   async deleteBook: ERROR ${e}`);
            setMessage("Connection error");
        }
        setIsLoading(false);
    }

    async function deleteBook(book) {
        console.log("async deleteBook");
        setIsLoading(true);

        const fetchOptions = {
            method: 'DELETE'
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}/${book.id}`, fetchOptions);
            if (response.ok) {
                console.log(`   async deleteBook: received response `);
                setBooks(books.filter((b) => b.id !== book.id));
                console.log("   async deleteBook: done");
                setMessage(`book ${book.title} deleted`);
            } else {
                const body = await response.json();
                console.log(`   async deleteBook: ERROR: ${response.status} - ${body.error} - ${body.message} `);
                setMessage(body.message);
            }
        } catch (e) {
            console.log(`   async deleteBook: ERROR ${e}`);
            setMessage("Connection error");
        }
        setIsLoading(false);
    }

    useEffect(() => {
        console.log("useEffect: start");

        async function getBooks() {
            console.log("   async getBooks: start");
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`);
                const body = await response.json();
                console.log(`   async getBooks: received response ${JSON.stringify(body)}`);
                setBooks(body);
                console.log("   async getBooks: done");
            } catch (e) {
                console.log(`   async getBooks: ERROR ${e}`);
                setMessage("Connection error");
            }
            setIsLoading(false);
        }

        getBooks();
        console.log("useEffect: back after getBooks");
        console.log("useEffect: done");
    }, []);

    return (
        <div className="App">
            {isLoading ? <p className="isLoading">LOADING DATA!!!</p> : false}
            {message ? <p className="message" onClick={() => setMessage()}>{message}</p> : false}
            <div className="booksList">{books.map((b) =>
                <Book key={b.title} book={b}
                      setSelectedBook={setSelectedBook}
                      deleteBook={deleteBook}/>)}</div>
            <CreateForm selectedBook={selectedBook} createBook={createBook}/>
            <EditForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} editBook={editBook}/>
        </div>
    );
}

export default App;
