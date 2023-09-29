import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";

const handler =async (req:NextRequest, res:NextResponse) => {
    if(req.method !== 'GET'){
        return NextResponse.json({status:405})
    }

    try{

    } catch (error){
        console.log(error)
        return NextResponse.json({status:400})
    }
} 