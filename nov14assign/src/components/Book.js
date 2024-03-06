
function Book({book,clickx}){
    /*console.log(book);*/
    return (
        <div className="book">
           <li>
                {book} 
                <button className="removebutton" onClick={()=>clickx(book)}>X</button>        
                
           </li>             
            
        </div>
    )
}

export default Book;