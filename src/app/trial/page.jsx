import { FileUpload } from "@/components/FileUpload"
import FileUpload1 from "@/components/FileUpload1"

const page = () => {
  return (
    <section className="flex  justify-center w-screen ">
      <div className="flex">
        <FileUpload/>
        {/* <FileUpload1/> */}
      </div>
    
    </section>
  )
}

export default page
