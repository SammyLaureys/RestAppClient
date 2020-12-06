/** @return {null} */
export function EditForm(props) {
    const {selectedBook, setSelectedBook, setIsLoading, updateBook, setError} = props;

    if (!selectedBook) return null;

    async function editBook(book) {
        if (!selectedBook) return;
        console.log("async editBook");
        setIsLoading(true);
        setError(false);

        const fetchOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(book)
        };
        const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}/${book.id}`, fetchOptions);
        const body = await response.json();
        if(response.ok){
            console.log(`   async editBook: received response ${JSON.stringify(body)}`);
            updateBook(body);
            console.log("   async editBook: done");
        } else {
            console.log(`   async createBook: ERROR: ${response.status} - ${body.error} - ${body.message}`);
            setIsLoading(false);
            setError(true);
        }

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