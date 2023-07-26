import { NextResponse } from 'next/server'
import courses from './data.json'

export async function GET(request){
    return NextResponse.json(courses)
}

export async function POST(request){
    try {
        const { title, description, level, link } = await request.json()
        console.log(title, description, level, link)
        return NextResponse.json({ message: 'Course Created!' })
    } catch (error) {
        console.error('Error parsing JSON:', error)
        return NextResponse.error('Bad Request', { status: 400 })
    }
}
