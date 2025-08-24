import OpenAI from 'openai';
import PdfParse from 'pdf-parse';
import { getResumeJson } from './src/utils/index.js';



  const openai = new OpenAI({
    baseURL: "https://api.aimlapi.com/v1",
    apiKey: "3756b0a396bf4c69a737a67d103cd715" //these are just for testing (too lazy to use an .env file🤡)
  });
// export async function POST(request) {
//   try {
//     // Get the form data
//     const formData = await request.formData();
//     const pdfFile = formData.get('pdf');

//     // Check if PDF file exists
//     if (!pdfFile) {
//       return NextResponse.json({ error: 'No PDF file found' }, { status: 400 });
//     }

//     // Convert file to buffer
//     const arrayBuffer = await pdfFile.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // Parse PDF and extract text
//     const {text} = await PdfParse(buffer);

//     // Log the extracted text
//     console.log(text);

//     const resumeJson = await getResumeJson(text, openai)
//     const portfolioCode = await generatePortfolio(resumeJson, openai)

//     console.log(portfolioCode)

//     return NextResponse.json({
//       success: true,
//       message: 'portfolio generated successfully',
//       code:portfolioCode
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
//   }
// }



const resumeText = `
Walid Oumoulilte
Développeur React/Front-end
Beni-Mellal, Maroc.
Email : walid.oumoulilte@gmail.com
Tel : +212698186439
GitHub: https://github.com/walid-hud
LinkedIn:
https://www.linkedin.com/in/walid101

PROFILE
Je m'appelle Walid. Je suis un développeur front-end autodidacte spécialisé dans React et un
passionné de programmation générale. Je suis compétent dans les technologies front-end
standard et je suis également familier avec plusieurs technologies back-end. J'aime utiliser mes
compétences pour construire des sites web et des produits de haute qualité.

COMPÉTENCES TECHNIQUES
- Langues: JavaScript ,HTML, CSS
- Front-End: React, React-Router, Tailwind CSS, Figma.
- Back-End: Express. Node JS.
- Database: MongoDB, MySQL.
- MS Office: Word, Excel, PowerPoint.

COMPÉTENCES NON TECHNIQUES
- Langues : Arabe : langue maternelle | Anglais : avancé (C1) | Français :
intermédiaire (B1)
- Esprit critique
- Résolution de problèmes
-  Autogestion
- Professionnalisme
-  Organisation
EDUCATION
- Licence en études anglaises | Faculté des lettres et des sciences humaines
beni mellal
2023 - 2026`
console.log("code: " + await getResumeJson(resumeText , openai))
