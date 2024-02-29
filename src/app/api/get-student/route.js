
import { NextResponse } from "next/server";
import db from "@/app/database/db-config";

export async function POST(req) {
    try {
        req = await req.json();
        const {id} = req;

        console.log(id);

        const query = "SELECT * FROM students WHERE id=?";
        const [rows, fields] = await db.query(query,[id]);

        if(!rows || rows.length == 0) {
            return NextResponse.json({
                success: false,
            });
        }
        
        return NextResponse.json({
            success: true,
            student: rows[0]
        });
    } catch (error) {
        console.log("Error while fetching student list: ", error)
        return NextResponse.json({
            success: false,
        });
    }
}