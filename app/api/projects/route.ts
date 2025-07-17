import { NextResponse } from 'next/server';
import { vercelblob } from '@/app/utils/axiosInstance';

export async function GET() {
  const response = await vercelblob.get("/json/proyectos.json");
  const projects = response.data;
  
  return NextResponse.json(projects);
}