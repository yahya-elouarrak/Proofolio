"use client"
import PuffLoader from 'react-spinners/PuffLoader'
import { Blocks } from "lucide-react"
import { FileUpload } from "@/components/FileUpload"
import { useState } from "react"


const page = () => {
async function generateProject() {
  // Check if file exists and is valid
  if (!file || !file[0]) {
    console.error('No file selected');
    return;
  }

  // Optional: Validate file type
  if (file[0].type !== 'application/pdf') {
    console.error('Please select a PDF file');
    return;
  }

  try {
    console.log('Uploading file:', file[0].name);
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
    console.log('Project generated successfully:', result);
    
    // Handle success - maybe update UI or redirect
    return result;
    
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
  const [file , setFile] = useState(null);
  function updateFile(file){
    setFile(file)

  }
  return (
    <section className="flex  justify-center w-screen relative py-12 ">
      <div className="flex flex-col w-1/3 gap-y-8 items-center">
        <FileUpload onChange={updateFile}/>
        <button
        disabled={isLoading ? true : false }
        onClick={()=>generateProject()} 
        className={`rounded-lg flex items-center w-fit px-3 py-2 hover:bg-accent-foreground/80 transition-colors duration-200 cursor-pointer text-xl gap-2 bg-accent-foreground text-neutral-950  disabled:opacity-75 disabled:cursor-not-allowed "`}>

          {!isLoading &&
          <>
          <span>Genrate</span> 
          <Blocks className=""/>
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
  )
}


export default page
