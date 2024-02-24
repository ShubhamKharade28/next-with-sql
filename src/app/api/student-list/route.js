
import { NextResponse } from "next/server";
import db from "@/app/database/db-config";

export async function GET() {
    try {
        const query = "SELECT * FROM students";
        const [rows, fields] = await db.query(query);

        if(!rows || rows.length == 0) {
            return NextResponse.json({
                success: false,
            });
        }
        
        return NextResponse.json({
            success: true,
            studentList: rows
        });
    } catch (error) {
        console.log("Error while fetching student list: ", error)
        return NextResponse.json({
            success: false,
        });
    }
}