import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        const formData = await request.formData();
        const pdfFile = formData.get('pdf');
        const jsonData = JSON.parse(formData.get('data'));

        if (!pdfFile || !jsonData) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Handle the PDF file and JSON data here
        // Example: Save the file, process the data, etc.

        return NextResponse.json({
            success: true,
            message: 'File and data received successfully',
            fileName: pdfFile.name,
            jsonData
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Error processing the upload' },
            { status: 500 }
        );
    }
}
