import Header from './components/Header';
import Students from './components/Students';
import {useState} from 'react';

function App() {
  const [students,setStudents] = useState([
  {
     id:1,
     name: 'Steven Tan',
     course: 'BS in Computer Science',
     age: 26,
     isScholar: true,
  },
  {
    id:2,
    name: 'Mae Princess Abad',
    course: 'BS in Tourism',
    age: 27,
    isScholar: false,
 },
 {
  id:3,
  name: 'Celestine Faith',
  course: 'AB in Communications',
  age: 20,
  isScholar: false,
},
{
  id:4,
  name: 'Charyl Tan',
  course: 'BS in Commerce',
  age: 25,
  isScholar: true,
},
]);

  return (
    <div className="container">
      <Header />
      <Students students={students}/>

    </div>
  );
}

export default App;
