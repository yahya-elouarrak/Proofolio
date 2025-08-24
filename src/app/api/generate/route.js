import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import PdfParse from 'pdf-parse';
import { getResumeJson } from '@/utils';
import { generatePortfolio } from '@/utils/generate';



export async function POST(request) {
  const openai = new OpenAI({
    baseURL: "https://api.aimlapi.com/v1",
    apiKey: "e917c0cf177a4bb5a4129d0c832b1eeb" //these are just for testing (too lazy to use an .env file🤡)
  });
  try {
    // Get the form data
    const formData = await request.formData();
    const pdfFile = formData.get('pdf');

    // Check if PDF file exists
    if (!pdfFile) {
      return NextResponse.json({ error: 'No PDF file found' }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse PDF and extract text
    const {text} = await PdfParse(buffer);

    // Log the extracted text
    console.log(text);

    const resumeJson = await getResumeJson(text, openai)
    // const portfolioCode = await generatePortfolio(resumeJson, openai)

    console.log(resumeJson)

    return NextResponse.json({
      success: true,
      message: 'portfolio generated successfully',
      code:portfolioCode
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
  }
}



