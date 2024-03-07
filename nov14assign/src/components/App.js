import {useState,useEffect} from "react";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import "../App.css";
import axios from "axios";
import config from "../services/config.json";



function App() {
  //console.log(config.apikey);
  const [myBooks, setMyBooks] = useState([    
    
  ]);  
  /*console.log(myBooks);*/

  const[y,setY] = useState("");

  useEffect(() => {
    getBooks();
  },[])

  const getBooks =async () => {
    const response = await axios.get(`https://${config.apikey}.mockapi.io/books`);
    setMyBooks(response.data);
    //console.log(myBooks);
  }

  const createBook = async (book) => {
    await axios.post(`https://${config.apikey}.mockapi.io/books`,{Title:book});
  }

  const updateBookForm = (e) => {
    e.preventDefault();
    const textinput =e.target.value;
    setY(textinput);
  }

  /*const addbook = (e) => {
    e.preventDefault()
    const updatedList = [...myBooks,y];
    setMyBooks(updatedList);
    setY('');
  }*/

  const addbook = async (e) => {
    e.preventDefault()
    await createBook(y);
    setY('');
    await getBooks();
  }

  /*const removebook = (bookremove)=> {    
    const newlist = myBooks.filter(book => book !==bookremove);
    setMyBooks(newlist);
  }*/

  const removebook = async(id)=>{
    await axios.delete(`https://${config.apikey}.mockapi.io/books/${id}`);
  }

  async function removeBook (e,id) {
    e.preventDefault()
    await removebook(id);
    await getBooks();
  }
 

  return (
    <div className="App">
      <h1>BookList App</h1>
      <h2>Favourite Books</h2>
      <p>An Application for your Book Collection</p>
      <AddBookForm inputtext={y} updateInputtext={updateBookForm}
                    clickadd = {addbook} />
      <BookList books={myBooks} clickex={removeBook}/>
      
    </div>
  );
}

export default App;
