// app/api/generate/route.js
import { NextResponse } from 'next/server';
import PdfParse from 'pdf-parse';

export async function POST(request) {
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
    const pdfData = await PdfParse(buffer);

    // Log the extracted text
    console.log('Extracted PDF Text:');
    console.log(pdfData.text);

    return NextResponse.json({ 
      success: true, 
      message: 'PDF parsed successfully',
      textLength: pdfData.text.length,
      pages: pdfData.numpages
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
  }
}