

import { useState } from 'react';
import Student from './Student';
import { StudentClass, StudentType } from './types/Student';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';


export default function Students() {
  const listTitle = 'Students list';
  const [studentList, updateList] = useState([
    new StudentClass('Ala', 'Makota', 123485, new Date('2000-01-21')),
    new StudentClass('Jan', 'Kowlaski', 2345, new Date('1999-10-23')),
    new StudentClass('Adrian', 'Duda', 156789, new Date('2001-04-01'))
  ]);
  const [showAddForm, changeValue] = useState(false);
  const [studentToEdit, setEditableStudent] = useState<StudentClass | null>(null);

  const addNewStudent = (student: StudentClass) => {
    changeValue(false)
    console.log("add fn invoked")
    //studentList.push(student);
    let students = [...studentList];
    students.push(student)
    updateList(students)
  }

  const openEditStudentForm = (id : number) => {
    let std = studentList.find(s => s.Index_nr === id)
    if(std)
      setEditableStudent(std)
  }

  const editStudent = (student: StudentClass) => {
    const students = studentList.map((s) =>{
      if(s.Index_nr === student.Index_nr)
        return student
      else return s
      }
    );
    updateList(students);
    setEditableStudent(null);
  };
  
  return (

    <>
      {listTitle}
      {studentList.length > 0 &&
        <ul>
          {studentList.map((el) => {
            return <li key={el.Index_nr}><Student student={el} emitStudent={openEditStudentForm} /></li>
          })}

        </ul>}
      {studentList.length === 0 && <p>No students stored</p>}
      {!showAddForm &&
        <button onClick={() => changeValue(true)}>Add student</button>
      }
      {showAddForm && <AddStudent addFn={addNewStudent} />}
      {studentToEdit != null && <EditStudent student={studentToEdit} editFn={editStudent} />}
    </>
  );
}
