import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Please add task!')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <hr/>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type="date" placeholder="Add date" value={day} onChange={(e)=>setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value="Save task" className="btn btn-block"/>
            
            
        </form>
    )
}

export default AddTask
