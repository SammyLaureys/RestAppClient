import {useState} from "react";

export function CreateForm(props) {
    const {createBook} = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    return <div className="editbox">
        <div>new book</div>
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