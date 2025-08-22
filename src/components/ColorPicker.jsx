import { Label } from "./ui/label"
const ColorPicker = () => {
return (
    <div className="flex items-center justify-between">
        <Label className={"font-geist font-medium text-foreground text-md"} >Choose you primary color</Label>
        <div className="relative overflow-hidden rounded-full flex items-center size-7 ">
            <input 
                className="absolute h-32 w-32 -left-2 -top-3 cursor-pointer"
                name='color picker' 
                type="color"
            />
        </div>
    </div>
)
}

export default ColorPicker
