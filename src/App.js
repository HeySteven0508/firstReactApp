import About from './components/About';
import Header from './components/Header';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [showAddButton, setShowAddButton] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Steven Tan',
      course: 'BS in Computer Science',
      age: 26,
      isScholar: true,
    },
    {
      id: 2,
      name: 'Mae Princess Abad',
      course: 'BS in Tourism',
      age: 27,
      isScholar: false,
    },
    {
      id: 3,
      name: 'Celestine Faith',
      course: 'AB in Communications',
      age: 20,
      isScholar: false,
    },
    {
      id: 4,
      name: 'Charyl Tan',
      course: 'BS in Commerce',
      age: 25,
      isScholar: true,
    },
  ]);

  //Delete a Student
  const DeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  //Add a Student 
  const onAddStudent = (student) => {
    //create a random id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newStudent = { id, ...student };
    setStudents([...students, newStudent]);

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
