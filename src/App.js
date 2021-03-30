import About from './components/About';
import Header from './components/Header';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [showAddButton, setShowAddButton] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(()=> {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setStudents(studentsFromServer);  
    }

    getStudents();
  }, [])


  // fetching the data in the api and stored in data variables
  const fetchStudents = async () => {
    const res = await fetch('http://localhost:5000/students');
    const data = await res.json();
    return data;
  }

  //Delete a Student
  const DeleteStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, {
      method: 'DELETE',
    });

    setStudents(students.filter((student) => student.id !== id));
  }

  //Add a Student 
  const onAddStudent = async (student) => {
    const res = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(student),
    });

    const data = await res.json();
    setStudents([...students,data]);
    
    // //create a random id
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newStudent = { id, ...student };
    // setStudents([...students, newStudent]);
    
  };

  return (
    <Router>
      <div className="container">
        <Header
          showAddButton={() => setShowAddButton(!showAddButton)}
          showAddValue={showAddButton} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddButton &&
              <AddStudent onAddStud={onAddStudent} />
            }

            {students.length > 0 ? <Students students={students} onDeleteStudent={DeleteStudent} /> : <h2 className='none'>Nothing to show </h2>}
          </>
        )} />



        <Route path='/about' component={About} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
