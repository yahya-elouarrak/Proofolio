import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://api.aimlapi.com/v1",
  apiKey: "3756b0a396bf4c69a737a67d103cd715" //these are just for testing (too lazy to use an .env file🤡)
});

export async function getResumeJson(resumeText,) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4.1-nano-2025-04-14',
      messages: [
        {
          role: "system",
          content: `You are a resume parser that ONLY returns valid JSON. Transform resume text into the specified JSON schema format. Follow these strict rules:
1. Return ONLY valid JSON - no explanations, no markdown, no additional text
2. Leave empty strings for missing fields, empty arrays for missing lists
3. Use "Present" for current positions in endDate
4. Ensure all dates follow YYYY-MM format
5. Do not include any text before or after the JSON object`
        },
        {
          role: "user",
          content: `Transform this resume text into JSON based on the schema below:

RESUME TEXT:
${resumeText}

JSON SCHEMA:
{
  "basics": {
    "name": "",
    "label": "",
    "email": "",
    "phone": "",
    "location": {
      "city": "",
      "region": "",
      "country": ""
    },
    "summary": "",
    "linkedin": "",
    "github": "",
    "portfolio": ""
  },
  "skills": [
    {
      "name": "", 
      "keywords": []
    }
  ],
  "experience": [
    {
      "company": "",
      "position": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "summary": "",
      "highlights": []
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "startDate": "",
      "endDate": "",
      "location": "",
      "gpa": ""
    }
  ],
  "projects": [
    {
      "name": "",
      "description": "",
      "url": "",
      "technologies": [],
      "highlights": []
    }
  ],
  "certifications": [
    {
      "title": "",
      "issuer": "",
      "date": "",
      "url": ""
    }
  ],
  "languages": [
    {
      "language": "",
      "fluency": ""
    }
  ],
  "interests": [],
  "references": [
    {
      "name": "",
      "relationship": "",
      "contact": ""
    }
  ]
}`
        }
      ],
      temperature: 0.1,
      max_tokens: 2048,
    });

    const content = completion.choices[0].message.content;

    return content;

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error(`Failed to get response from GPT: ${error.message}`);
  }
}

