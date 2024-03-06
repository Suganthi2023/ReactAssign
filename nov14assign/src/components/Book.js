
function Book({book}){
    console.log(book);
    return (
        <div className="book">
           <li>
                {book}
           </li>             
            
        </div>
    )
}

export default Book;