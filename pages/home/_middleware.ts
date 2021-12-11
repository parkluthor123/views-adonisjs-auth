import { NextRequest, NextResponse } from 'next/server';
export function middleware(req: NextRequest, ev: NextResponse) {
    if(!req.cookies['token'] || req.cookies['token'] === undefined)
    {
        return NextResponse.redirect('/')
    }
    else
    {
        return NextResponse.next()
    }
}