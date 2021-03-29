import Student from './Student';

const Students = ({students}) => {
    return (
        <>
            {students.map((student) => {
                return (
                    <Student key={student.id} student={student} />
                );
            })}
        </>
    )
}

export default Students
