
const StudentProfile = ({student}) => {
    console.log(student);
    return (
        <div>
             <h3>{student.name}</h3>
             <p>{student.course}</p>
             <p>{student.age}</p>
             <p>{student.isScholarship}</p>
        </div>
    )
}

export default StudentProfile
