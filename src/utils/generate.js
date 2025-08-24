import OpenAI from "openai";

// Ensure you set OPENAI_API_KEY in your environment (.env.local)
const openai = new OpenAI({
   baseURL: "https://api.aimlapi.com/v1",
    apiKey: "0d18cb327d434b3cbb3559af3ef2f74a"
            
});

/**
 * Generates a complete single-page HTML portfolio as a string using GPT-4.
 * @param resumeJson A stringified JSON object containing resume data.
 * @returns The full HTML file contents as a plain string (no markdown fences or explanations).
 */
export async function generatePortfolio(resumeJson){
  const prompt = `
    Create a modern, one-page HTML portfolio based on the following resume data. 
    
    Requirements:
    - Dark theme with a random primary accent color
    - Modern design that makes efficient use of space
    - Clean outlines and borders
    - Responsive layout
    - Include sections for: Header/Hero, About, Skills, Experience, Projects (if any), Education, Contact
    - Use CSS Grid or Flexbox for layout
    - Include subtle animations and hover effects
    - Professional typography
    - Return ONLY the complete HTML code with embedded CSS and any necessary JavaScript
    
    Resume Data:
    ${resumeJson}
    
    Generate a complete, standalone HTML file that can be opened directly in a browser.
  `;

  const completion = await openai.chat.completions.create({
    model: "openai/gpt-4.1-nano-2025-04-14",
    temperature: 0.8,
    messages: [
      {
        role: "system",
        content:
          "You are an expert front-end engineer. Always return only raw HTML when asked for a full page—no code fences, no explanations.",
      },
      { role: "user", content: prompt },
    ],
  });

  const raw = completion.choices[0].message.content;

  // Strip any accidental markdown code fences or leading/trailing commentary.
  // Ensures we return only the HTML string.
  const cleaned = stripCodeFences(raw).trim();

  return cleaned;
}

/** Remove ```html ... ``` or ``` ... ``` fences, if the model adds them. */
function stripCodeFences(text){
  // Remove ```html ... ``` and ``` ... ```
  const fenceRegex = /```(?:html|HTML)?\s*([\s\S]*?)\s*```/g;
  const match = fenceRegex.exec(text);
  if (match && match[1]) return match[1];

  // If it didn't use fences but added leading commentary, try to heuristically grab first <!DOCTYPE or <html> onward.
  const startIdx = Math.max(text.indexOf("<!DOCTYPE"), text.indexOf("<html>"));
  if (startIdx !== -1) return text.slice(startIdx);

  return text;
}


const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Say something inspiring.' }
  ]
});
console.log(completion.choices[0].message.content);