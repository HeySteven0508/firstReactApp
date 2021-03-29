import Student from './Student';

const Students = ({students}) => {
    console.log(students);
    return (
        <>
            {students.map((student) => {
                return (
                    <Student student={student} />
                );
            })}
        </>
    )
}

export default Students
