import React, {useState} from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
   float: left;
   margin-left: 25%;
`;

const AuthorDiv = styled.div`
  float: right;
  margin-right: 25%;
`;

const StyledHeader = styled.h2`
   margin-left: 40%;
`;
const ButtonDiv = styled.div`
   width: 100%;
   margin-top: 2%;
   margin-left: 48%;
`;

function Form(props){
    const {addBook} = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    async function createBook(book){
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        };
        const response = await fetch(`${process.env.REACT_APP_CONNECTION_LOCATION}`,fetchOptions);
        const body = await response.json();
        addBook(body);
    }

    return(<>
            <StyledHeader>Create a new book</StyledHeader>
            <TitleDiv>
                <label>title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            </TitleDiv>
            <AuthorDiv>
                <label>author:</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </AuthorDiv>
            <br/>
            <ButtonDiv>
                <button onClick={() => createBook({title,author})}>add</button>
            </ButtonDiv>
        </>
    )
}

export default Form;