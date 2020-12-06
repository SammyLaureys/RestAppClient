import {useState} from "react";

export function CreateForm(props) {
    const {setIsLoading, setError, addBook} = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    async function createBook(book) {
        console.log("async createBook");
        setIsLoading(true);
        setError(false);

        const fetchOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(book)
        };
        const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`, fetchOptions);
        const body = await response.json();
        if(response.ok){
            console.log(`   async createBook: received response ${JSON.stringify(body)}`);
            addBook(body);
            console.log("   async createBook: done");
        } else {
            console.log(`   async createBook: ERROR: ${response.status} - ${body.error} - ${body.message}`);
            setIsLoading(false);
            setError(true);
        }
        setIsLoading(false);
    }

    return <div className="editbox">
        <div className="editboxrow">
            <label>title: </label>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="editboxrow">
            <label>author: </label>
            <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="editboxbuttonrow">
            <button onClick={() => createBook({title, author})}>create</button>
        </div>
    </div>;
}