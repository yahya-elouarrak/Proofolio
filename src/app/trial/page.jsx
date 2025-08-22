import ColorPicker from "@/components/ColorPicker"
import { FileUpload } from "@/components/FileUpload"
import Select from "@/components/Select"  

const page = () => {
  return (
    <section className="flex  justify-center w-screen relative py-12 ">
      <div className="flex flex-col w-1/3 gap-y-8">
        <FileUpload/>
        <Select/>
      </div>
    
    </section>
  )
}

export default page
