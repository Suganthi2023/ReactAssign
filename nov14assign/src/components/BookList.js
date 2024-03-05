import Book from './Book';

function BookList({books}){
    /*console.log(books);*/
    return (
        <div className="books">
            
            <ul>
                {books.map((book)=> <Book book={book}/>)}
            </ul>            
        </div>
    )
}

export default BookList;