import Book from './Book';

function BookList({books}){
    /*console.log(books);*/
    return (
        <div className="books">            
           
            {books.map((book)=> <Book book={book}/>)}
                        
        </div>
    )
}

export default BookList;