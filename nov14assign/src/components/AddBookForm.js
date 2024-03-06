

function AddBookForm({inputtext,updateInputtext,clickadd}){
    
    return (
        <div className="Addbook">
             
             <input value={inputtext} onChange={updateInputtext}/>
             <button onClick={clickadd}>Add Book</button>             
        </div>
    )
}

export default AddBookForm;