import db from "@/app/database/db-config";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        req = await req.json();
        const {id} = req;

        const query = 'DELETE FROM students WHERE id=?';
        const result = await db.query(query, [id]);

        return NextResponse.json({success: true})
    } catch (error) {
        console.log("Error deleting student", error);
        return NextResponse.json({success: false});
    }
}