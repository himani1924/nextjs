import {students} from '../../public/teachersStudents.json'
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method === 'GET'){
        res.status(200).json({students})
    }
    else{
        res.status(400).json({message: 'Invalid method'})
    }
}