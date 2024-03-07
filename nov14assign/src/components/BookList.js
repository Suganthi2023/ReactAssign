import Book from './Book';

function BookList({books, clickex}){
    /*console.log(books);*/
    return (
        <div className="books">            
           
            {books.map((book)=> <Book key={book.id} book = {book} title={book.Title} clickx={clickex} />)}            
                        
        </div>
    )
}

export default BookList;