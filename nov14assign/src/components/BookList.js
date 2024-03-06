import Book from './Book';

function BookList({books,clickex}){
    /*console.log(books);*/
    return (
        <div className="books">            
           
            {books.map((book)=> <Book book={book} clickx={clickex} />)}
            
                        
        </div>
    )
}

export default BookList;