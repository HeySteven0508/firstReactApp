
const Students = ({students}) => {
    console.log(students);
    return (
        <>
            {students.map((student) => {
                return (
                <div className="student">
                    <h3>{student.name}</h3>
                </div>
                );
            })}
        </>
    )
}

export default Students
