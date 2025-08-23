// Node.js function to read and parse a local PDF file
import fs from 'fs';
import path from 'path';
import PdfParse from 'pdf-parse';

async function readAndParsePDF(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read the PDF file as buffer
    const pdfBuffer = fs.readFileSync(filePath);
    
    console.log(`Reading PDF: ${filePath}`);
    console.log(`File size: ${pdfBuffer.length} bytes`);

    // Parse the PDF
    const pdfData = await PdfParse(pdfBuffer);

    // Log the results
    console.log('PDF parsed successfully!');
    console.log(`Pages: ${pdfData.numpages}`);
    console.log(`Text length: ${pdfData.text.length} characters`);
    console.log('\n--- EXTRACTED TEXT ---');
    console.log(pdfData.text);

    return pdfData;

  } catch (error) {
    console.error('Error reading/parsing PDF:', error.message);
    throw error;
  }
}

// Example usage with different path formats:
async function main() {
  // Option 1: Absolute path
  
  // Option 2: Relative path from current working directory
  const pdfPath2 = './src/walid_oumoulilte_fr.pdf';
  
  // Option 3: Using path.join for cross-platform compatibility
//   const pdfPath3 = path.join(process.cwd(), 'test', 'data', '05-versions-space.pdf');
  
  try {
    const result = await readAndParsePDF(pdfPath2); // Use path3 for better compatibility
    // Do something with the result
  } catch (error) {
    console.error('Failed to process PDF:', error.message);
  }
}

// Run the example
main();

// Or export the function if using as a module
export default readAndParsePDF;