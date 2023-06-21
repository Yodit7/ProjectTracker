import '../css/todo.css'

export function Notes() {
    return (
        <>
        <div className="notes">
            <div className="notes-container">
                <form>
                    <textarea placeholder="Add a note" className='notes_field'></textarea>
                    <button className="btn-notes">Add</button>
                </form>
            </div>
            <div className="notes-display">
                
            </div>
        </div>
        </>
    )
}