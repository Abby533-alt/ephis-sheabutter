import { Facebook, Instagram, Youtube, } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex bg-pink-700 justify-around items-center h-60">
                <div className="flex-col">
                    <h1 className="font-bold text-white mb-2">Bigail Luxe</h1>
                    <p className="text-white mb-7">Lorem ipsum dolor sit amet, consectetur  <br />adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                    <div className="flex gap-5">
                        <div className="h-8 w-8 bg-purple-500 rounded-md flex justify-center items-center"><Facebook className="h-4 w-4 text-white" /></div>
                        <div className="h-8 w-8 bg-purple-500 rounded-md flex justify-center items-center"><Instagram className="h-4 w-4 text-white" /></div>
                        <div className="h-8 w-8 bg-purple-500 rounded-md flex justify-center items-center"><Youtube className="h-4 w-4 text-white" /></div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-white mb-4">Quick Links</h1>
                    <span className="cursor-pointer hover:text-purple-600 text-gray-500">About</span>
                    <span className="cursor-pointer hover:text-purple-600 text-gray-500">Products</span>
                    <span className="cursor-pointer hover:text-purple-600 text-gray-500">Services</span>
                    <span className="cursor-pointer hover:text-purple-600 text-gray-500">Contact</span>
                </div>

                <div className="space-x-6">
                    <input 
                        className="bg-white rounded px-4 py-2 text-sm min-w-60" 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email" 
                    />
                    <button className="bg-purple-400 hover:bg-purple-600 rounded py-2 px-6 text-sm font-medium transition-colors">Subscribe</button>
                </div>
                
                <div >

                </div>
        </footer>
    )
};