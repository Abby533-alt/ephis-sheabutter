import { Search } from "lucide-react"
import { HeartIcon } from "lucide-react"

export default function Navbar() {
    return(
        <nav className="flex justify-around bg-pink-300 h-15 items-center">
           <div className="text-white font-st italic">Bigail Luxe</div>
           <div className="space-x-6 text-white">
            <span className="cursor-pointer hover:text-purple-600">Home</span>
            <span className="cursor-pointer hover:text-purple-600">Men</span>
            <span className="cursor-pointer hover:text-purple-600">Women</span>
            <span className="cursor-pointer hover:text-purple-600">Contact</span>
           </div>
           <div className="flex space-x-3 text-white">
            <span className="h-4 w-4"><search/></span>
            <span className="h-4 w-4"><HeartIcon/></span>
           </div>
        </nav>
)};