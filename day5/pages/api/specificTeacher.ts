import {students, teachers} from '../../public/teachersStudents.json'
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const teacher_id = parseInt(req.query.teacher_id as string);
    if(isNaN(teacher_id)){
        return res.status(400).json({error: 'Invalid teacher id'});
    }
    const teacher = teachers.find(t=>teacher_id === t.id)
    if(!teacher){
        return res.status(400).json({error: 'Teacher not found'});
    }

    const filteredStudents = students.filter(student => student.teacher_ids.includes(teacher_id))
    return res.status(200).json(filteredStudents)
   
}