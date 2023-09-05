import {useState} from "react";

const AddForm = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Please add a task');
            return;
        }
        addTask({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);

    }
    return (
        <div>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Task name"/>
                </div>
                <div className="form-control">
                    <label>Day & time</label>
                    <input type="text" value={day} onChange={(e)=> setDay(e.target.value)} placeholder="Day and Time"/>
                </div>
                <div className="form-control form-control-check">
                    <label>Reminder</label>
                    <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
                </div>
                <input className='btn btn-block' type="submit" value="Save Task"></input>
            </form>
        </div>
    );
}

export default AddForm;
