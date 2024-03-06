

function AddBook({inputtext,updateInputtext}){
    
    return (
        <div className="Addbook">
             <h3>AddBook</h3> 
             <input value={inputtext} onChange={updateInputtext}/>
             <button>Add</button>             
        </div>
    )
}

export default AddBook;