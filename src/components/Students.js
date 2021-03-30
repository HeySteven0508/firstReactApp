import Student from './Student';


const Students = ({students,onDeleteStudent}) => {
    return (        
        <>
            {students.map((student) => {
                return (
                    <Student key={student.id} student={student} 
                    onDeleteStudent={onDeleteStudent} />
                );
            })}
        </>
    )
}

export default Students
