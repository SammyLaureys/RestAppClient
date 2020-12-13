/** @return {null} */
export function EditForm(props) {
    const {selectedBook, setSelectedBook, editBook} = props;

    if (!selectedBook) return null;

    return <>
        <div className="overlay" onClick={() => setSelectedBook()}/>
        <div className="editbox modal">
            <div>edit the book</div>
            <div className="editboxrow">
                <label>title: </label>
                <input value={selectedBook.title}
                       onChange={(e) => setSelectedBook({...selectedBook, title: e.target.value})}/>
            </div>
            <div className="editboxrow">
                <label>author: </label>
                <input value={selectedBook.author}
                       onChange={(e) => setSelectedBook({...selectedBook, author: e.target.value})}/>
            </div>
            <div className="editboxbuttonrow">
                <button onClick={() => setSelectedBook()}>cancel</button>
                <button onClick={() => editBook(selectedBook)}>save</button>
            </div>
        </div>
    </>;
}