/** @return {null} */
export function EditForm(props) {
    const {selectedBook, setSelectedBook, setIsLoading, updateBook} = props;

    if (!selectedBook) return null;

    async function editBook(book) {
        if (!selectedBook) return;
        console.log("async editBook");
        setIsLoading(true);

        const fetchOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(book)
        };
        const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}/${book.id}`, fetchOptions);
        const body = await response.json();
        console.log(`   async editBook: received response ${JSON.stringify(body)}`);
        updateBook(body);
        console.log("   async editBook: done");
        setIsLoading(false);
    }

    return <>
        <div className="overlay" onClick={() => setSelectedBook()}/>
        <div className="editbox modal">
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