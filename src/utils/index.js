import pdfParse from 'pdf-parse';
export async function parsePdfBuffer(pdfBuffer) {
    try {
        const data = await pdfParse(pdfBuffer);
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

