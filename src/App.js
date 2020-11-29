import './App.css';
import React, {useEffect, useState} from "react";
import Form from "./components/form";
import styled from "styled-components"

const StyledForm = styled.div`
  width: 50%;
  border: 1px solid black;
  margin-top: 5%;
  margin-left: 24%;
  margin-right: 20%;
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #08AEEA;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);

`;

function App() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = process.env.REACT_APP_CONNECTION_LOCATION;

    function addBook(book){
        setBooks([...books, book]);
    }

    function deleteBook(id){
        setBooks(books.filter(book => book.id !== id));
    }

    async function removeBook(book){
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        };
        const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`,fetchOptions);
        const body = await response.json();
        deleteBook(body);
    }

    useEffect(() => {
        async function getBooks() {
            setIsLoading(true);
            const response = await fetch(location);
            const body = await response.json();
            setBooks(body);
            setIsLoading(false);
        }

        getBooks();
    }, []);

    return (<div className={"backGround"}>
            <div className={"App"}>
                {isLoading ? <p>LOADING DATA!!!</p> : false}
                {books.map((b) => <p key={b.title}>{b.title} - {b.author} <button onClick={() => removeBook()}>delete</button></p>)}
            </div>
            <StyledForm>
                <Form addBook={addBook}/>
            </StyledForm>
        </div>
    );
}

export default App;
