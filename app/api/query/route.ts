import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
    try{
        // DO SOMETHING WITH REQUEST
        return NextResponse.json({message: "Successfully queried data"},{status:200})
    }
    catch(e){
        console.log(e)
        return NextResponse.json({message: "Internal server error"},{status:500})
    }
}