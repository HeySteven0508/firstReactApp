import {useState} from 'react';

const AddStudent = ({onAddStud}) => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [age, setAge] = useState(0);
    const [isScholar, setIsScholar] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        //validation
        if (!name){
            alert('Please enter your name');
            return;
        }

        onAddStud({name,course,age,isScholar});

        //update the state after submitted
        setName('');
        setCourse('');
        setAge('');
        setIsScholar(false); // default value

    };
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label> Name </label>
                     <input type='text' placeholder='Enter Name' 
                    value= {name} 
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label> Course </label>
                    <input type='text' placeholder='BS in Computer Science' 
                    value= {course} 
                    onChange = {(e) => setCourse(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label> Age </label>
                    <input type='number' placeholder='Enter Age' 
                    value= {age} 
                    onChange = {(e) => setAge(e.target.value)}
                    />
                </div>
                <div className='form-control form-control-check'>
                    <label> Scholarship </label>
                    <input type='checkbox' checked= {isScholar} 
                    value= {isScholar} 
                    onChange = {(e) => setIsScholar(e.currentTarget.checked)}
                    />
                </div>
                <input type = 'submit' value = 'Register Student' className = 'btn btn-block'/>
            </form>
            
        </div>
    )
}

export default AddStudent
