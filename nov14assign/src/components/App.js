import {useState} from "react";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";


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
    const textinput =e.target.value;
    setY(textinput);
  }

  const addbook = (e) => {
    e.preventDefault()
    const updatedList = [...myBooks,y];
    setMyBooks(updatedList);
    setY('');
  }

  return (
    <div className="App">
      <h1>BookList App</h1>
      <h2>Favourite Books</h2>
      <p>An Application for your Book Collection</p>
      <AddBookForm inputtext={y} updateInputtext={updateBookForm}
                    clickadd = {addbook}/>
      <BookList books={myBooks}/>
      
    </div>
  );
}

export default App;
