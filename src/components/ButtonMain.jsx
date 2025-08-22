
const ButtonMain = ({children, text}) => {
  return (
     <button className="flex cursor-pointer px-10 mx-2 py-2 h-full rounded-full text-background bg-foreground  font-medium  transition-all text-sm duration-150   hover:scale-105 hover:outline-chart-5 hover:outline-2 ">
        {text}
        {children}
    </button>
  )
}

export default ButtonMain
