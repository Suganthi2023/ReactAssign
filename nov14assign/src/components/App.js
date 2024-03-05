import {useState} from "react";
import BookList from "./BookList";


function App() {
  const [books, setBooks] = useState([    
    "Pride and Prejudice",          
    "Who moved my cheese?",       
    "The One Minute Manager"      
  ]);  
  /*console.log(books);*/

  return (
    <div className="App">
      <h1>BookList App</h1>
      <p>An Application for your Book Collection</p>
      <BookList books={books}/>
    </div>
  );
}

export default App;
