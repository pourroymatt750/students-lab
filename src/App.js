import './App.css';
import Student from './Student';
import Score from './Score';
import studentData from './studentData';

function App() {
  const students = studentData

  const studentList = students.map(student => {
    return <Student student={student} />
      
  })
  return (
    <div className="App">
      {studentList}
    </div>
  );
}

export default App;
