
function Book({book,title,clickx}){
    /*console.log(book);*/
    return (
        <div className="book">
           <li>
                {title} 
                <button className="removebutton" onClick={(e)=>clickx(e,book.id)}>X</button>        
                
           </li>             
            
        </div>
    )
}

export default Book;