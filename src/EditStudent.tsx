import { useEffect, useState } from 'react';
import { StudentClass } from './types/Student';

type StudentPropsType = {
    student: StudentClass;
    editFn: (editedStudent: StudentClass) => void;
};

export default function EditStudent(props: StudentPropsType): React.ReactElement {
    const { student, editFn } = props;
    const [name, setName] = useState(student.Name);
    const [surname, setSurname] = useState(student.Surname);
    const [birthdate, setBirthdate] = useState(student.dataUrodzenia.toISOString().split('T')[0]);

    useEffect(() => {
        setName(student.Name);
        setSurname(student.Surname);
        setBirthdate(student.dataUrodzenia.toISOString().split('T')[0]);
      }, [student]);
      
    const saveChanges = (): void => {
        const editedStudent = new StudentClass(name, surname, student.Index_nr, new Date(birthdate));
        editFn(editedStudent); 
    };

    const cancelChanges = (): void => {
        const editedStudent = student
        editFn(editedStudent); 
    };
    return (
        <div>
            <label>Name:
                <input type="text" value={name}onChange={(e) => setName(e.target.value)}/>
            </label>
            <br />
            <label>Surname: <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </label>
            <br />
            <label>Date of birth: <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
            </label>
            <br />
            <button onClick={saveChanges}>Save</button>
            <button onClick={cancelChanges}>Cancel</button>
        </div>
    );
}
