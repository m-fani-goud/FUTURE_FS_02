import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);

return(

<nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg text-white z-50 shadow-md">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

{/* Logo */}

<div className="flex items-center gap-3">

<img
src="/logo.jpg"
alt="Dawath Biryani"
className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-yellow-400"
/>

<div>

<h1 className="text-lg md:text-xl font-bold text-yellow-400">
Dawath Biryani
</h1>

<p className="text-xs text-gray-300">
Miryalaguda
</p>

</div>

</div>

{/* Desktop Links */}

<div className="hidden md:flex items-center gap-8 font-medium">

<a href="#home" className="hover:text-yellow-400 transition">
Home
</a>

<a href="#menu" className="hover:text-yellow-400 transition">
Menu
</a>

<a href="#about" className="hover:text-yellow-400 transition">
About
</a>

<a href="#contact" className="hover:text-yellow-400 transition">
Contact
</a>

<a
href="https://wa.me/919676462290"
target="_blank"
className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition shadow"
>

<FaWhatsapp/>
Order

</a>

</div>

{/* Mobile Menu Button */}

<button
className="md:hidden"
onClick={()=>setMenuOpen(!menuOpen)}
>

{menuOpen ? <HiX size={28}/> : <HiMenu size={28}/>}

</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden bg-black/90 flex flex-col items-center gap-6 py-6 text-lg">

<a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
<a href="#menu" onClick={()=>setMenuOpen(false)}>Menu</a>
<a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
<a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

<a
href="https://wa.me/919676462290"
className="bg-yellow-500 text-black px-5 py-2 rounded-lg"
>

Order on WhatsApp

</a>

</div>

)}

</nav>

)

}

export default Navbar