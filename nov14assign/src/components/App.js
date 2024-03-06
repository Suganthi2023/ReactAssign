import {useState} from "react";
import BookList from "./BookList";
import AddBook from "./AddBookForm";


function App() {
  const [myBooks, setMyBooks] = useState([    
    "Pride and Prejudice",          
    "Who moved my cheese?",       
    "The One Minute Manager"      
  ]);  
  /*console.log(myBooks);*/

  const[y,setY] = useState("");

  const updateBookForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>BookList App</h1>
      <p>An Application for your Book Collection</p>
      <BookList books={myBooks}/>
      <AddBook inputtext={y} updateInputtext={updateBookForm}/>
    </div>
  );
}

export default App;
