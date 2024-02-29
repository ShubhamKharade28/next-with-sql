import db from "@/app/database/db-config";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        req = await req.json();
        const {id,email} = req;

        const query = 'UPDATE students SET email=? WHERE id=?';
        const [result,fields] = await db.query(query, [email, id]);
        
        console.log("Email updated successfully");

        return NextResponse.json({success: true})
    } catch (error) {
        console.log("Error updating email", error);
        return NextResponse.json({success: false});
    }
}