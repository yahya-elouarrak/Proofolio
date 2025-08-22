import NavBar from "@/components/NavBar";
import { WavyBackground } from "@/components/Background";
import ButtonMain from "@/components/ButtonMain";


export default function Page() {
  return (
    <main className="font-geist">
      <section className="h-screen w-screen relative overflow-hidden">
        <NavBar/>
        <WavyBackground   containerClassName={"z-[-1] "} className={"fixed "}
          colors={
            ["#b3a6ff" ,"#7e8ac2","#7dc6fa","#4db6a2","#f47be3" ]}
            backgroundFill={"#0f0f1a"}>
              
            </WavyBackground>
          <div className=" absolute top-0 mt-16 w-full flex flex-col gap-y-4 items-center justify-center ">
            <h1 className="text-7xl capitalize font-medium text-center flex flex-col ">
            <span>Turn your resume into a</span>
            <span><span className="gradient-text">living</span> website</span></h1>
            <p className=" tracking-widest capitalize text-muted-foreground text-lg">Your story deserves more than just a PDF</p>
          <div>
            <ButtonMain text={"try now"}/>
          </div>
          <div className="w-3/6 backdrop-blur-md h-84 rounded-t-2xl ">
          </div>
          </div>

          </section>
      </main>
  );
}

