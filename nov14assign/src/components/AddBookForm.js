

function AddBookForm({inputtext,updateInputtext,clickadd}){
    
    return (
        <div className="Addbook">
             
             <input className="input" value={inputtext} onChange={updateInputtext}/>
             <button className ="addbutton" onClick={clickadd}>Add Book</button>
             
            
                          
        </div>
    )
}

export default AddBookForm;