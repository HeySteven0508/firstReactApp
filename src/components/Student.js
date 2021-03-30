import { red } from '@material-ui/core/colors'
import {FaTimes} from 'react-icons/fa'

const Student = ({student,onDeleteStudent}) => {


    return (
        <div className={`student ${student.isScholar ? 'scholar' : ''}`} >
             <h3>{student.name} {' '}
              <FaTimes className='deleteBtn'
                onClick={()=>onDeleteStudent(student.id)}/>
              </h3>
             <p>{student.course}</p>
             <p>{student.age} years old</p>
             <p>scholarship : <em className={`${student.isScholar ? 'scholarship' : ''}`}>   {student.isScholar ? 'Yes' : 'No'} </em></p>
        </div>
    )
}

export default Student
