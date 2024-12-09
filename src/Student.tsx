

import { StudentClass } from './types/Student';

type StudentPropType={
    student:StudentClass
    emitStudent: (id: number) => void;
}

//export default function Student({student}:{student: StudentClass}) {
    export default function Student({student, emitStudent}:StudentPropType) : React.ReactElement{
        
      const editButtonHandler=():void=>{
        emitStudent(student.Index_nr);
      }
  return (
    
    <>
      Index {student.Index_nr}:   <p>{student.Name} {student.Surname} {student.dataUrodzenia.toDateString()}</p>
      <button onClick={()=>editButtonHandler()}>Edit</button>
    </>
  );
}
