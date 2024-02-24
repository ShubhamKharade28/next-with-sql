import db from "@/app/database/db-config";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        req = await req.json();
        const {name,email} = req;

        const query = 'INSERT INTO students (name,email) VALUES (?,?)';
        const [result,fields] = await db.query(query, [name,email]);
        
        console.log("Student added successfully, insertId: ", result.insertId);

        return NextResponse.json({success: true, insertId: result.insertId})
    } catch (error) {
        console.log("Error adding new student", error);
        return NextResponse.json({success: false});
    }
}