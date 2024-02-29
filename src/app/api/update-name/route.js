import db from "@/app/database/db-config";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        req = await req.json();
        const {id,name} = req;

        const query = 'UPDATE students SET name=? WHERE id=?';
        const [result,fields] = await db.query(query, [name, id]);
        
        console.log("Name updated successfully");

        return NextResponse.json({success: true})
    } catch (error) {
        console.log("Error updating name", error);
        return NextResponse.json({success: false});
    }
}