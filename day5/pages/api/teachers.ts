import {teachers} from '../../public/teachersStudents.json'
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method === 'GET'){
        res.status(200).json({teachers})
    }
    else if(req.method === 'POST'){
        const {id, name, subject , email} = req.body

        const newTeacher = {
            id,
            name,
            subject,
            email,
        }
        
        teachers.push(newTeacher)

        res.status(201).json(teachers)

    }
    else{
        res.status(400).json({message: 'Invalid method'})
    }
}