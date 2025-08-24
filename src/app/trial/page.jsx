"use client"
import PuffLoader from 'react-spinners/PuffLoader'
import { Blocks, LucideDownload } from "lucide-react"
import { FileUpload } from "@/components/FileUpload"
import { useRef, useState } from "react"
import PortfolioRenderer from '@/components/PortfolioRenderer'
import { downloadHTML } from '@/lib/utils'

const iframeDemo = `
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About | Resume to Website AI</title>
  <style>
    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f6f8;
      color: #333;
      line-height: 1.6;
    }

    /* About Section */
    .about-section {
      background: linear-gradient(to right, #f8f9fa, #e9ecef);
      padding: 60px 20px;
    }

    .about-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .about-container h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #222;
      letter-spacing: 1px;
    }

    .about-container p {
      font-size: 1.1rem;
      margin-bottom: 20px;
      color: #555;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .about-container h2 {
        font-size: 2rem;
      }

      .about-container p {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <section class="about-section">
    <div class="about-container">
      <h2>About This Tool</h2>
      <p>
        This project was born from a simple idea: your resume shouldn’t be a static document—it should be a dynamic reflection of who you are. Using AI, we transform your career history into a sleek, customizable website that speaks louder than bullet points.
      </p>
      <p>
        Whether you're a developer, designer, or dreamer, this tool helps you showcase your journey with clarity, creativity, and control. No templates. No fluff. Just your story—amplified.
      </p>
    </div>
  </section>
</body>
</html>

`

const page = () => {

  const iframecontainer = useRef()

   async function generateProject() {
    if (!file || !file[0]) {
      return;
    }

    // Optional: Validate file type
    if (file[0].type !== 'application/pdf') {
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("pdf", file[0]);

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - let browser set it with boundary
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate project: ${response.status} ${errorText}`);
      }

      const result = await response.json();
      console.log(result)
      setPortfolioCode(result.code)
      // iframecontainer.current.scrollIntoView({behaviour:"smooth"})

    } catch (error) {
      console.error('Error generating project:', error);

      // Optional: Show user-friendly error message
      // setError(error.message);

      throw error; // Re-throw if caller needs to handle it
    } finally {
      setIsLoading(false);
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [portfolioCode, setPortfolioCode] = useState("")
  function updateFile(file) {
    setFile(file)
  }
  return (
    <main className='w-screen'>
      <section className="flex justify-center w-screen relative py-12 ">
        <div className="flex flex-col w-1/3 gap-y-8 items-center">
          <FileUpload onChange={updateFile} />
          <button
            disabled={isLoading ? true : false}
            onClick={() => generateProject()}
            className={`rounded-lg flex items-center w-fit px-3 py-2 hover:bg-accent-foreground/80 transition-colors duration-200 cursor-pointer text-xl gap-2 bg-accent-foreground text-neutral-950  disabled:opacity-75 disabled:cursor-not-allowed "`}>

            {!isLoading &&
              <>
                <span>Genrate</span>
                <Blocks className="" />
              </>
            }
            {isLoading &&
              <>
                <span>Genrating</span>
                <PuffLoader color='#0f0f1a' className=' opacity-100' size={22} />
              </>
            }

          </button>
        </div>

      </section>

     {portfolioCode.length > 0 && 
      <div className='relive w-screen h-fit  font-geist'  ref={iframecontainer}>
        <div className='flex justify-between px-4 py-4'>
          <h1 className='text-2xl'>demo</h1>
          <button 
          onClick={()=>{
            downloadHTML(portfolioCode , "portfolio.html")
            
          }}
          className='flex items-center justify-baseline gap-x-2 outline-1 outline-foreground px-2 py-2 rounded-md bg-accent text-accent-foreground cursor-pointer hover:bg-accent/80'>
            <span className='text-md'>download code</span>
            <LucideDownload size={20} className='-mt-1'/>
          </button>
        </div>
        <PortfolioRenderer htmlString={portfolioCode} /> 
      </div>
     }
    </main>
  )
}


export default page
