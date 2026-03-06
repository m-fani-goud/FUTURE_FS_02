function Footer(){

return(

<footer className="bg-black text-gray-300 pt-12 pb-6">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

{/* Logo + Restaurant */}

<div>

<div className="flex items-center gap-3 mb-4">

<img
src="/logo.jpg"
alt="Dawath Biryani"
className="w-12 h-12 rounded-full border-2 border-yellow-400"
/>

<h3 className="text-xl font-bold text-yellow-400">
Dawath Biryani
</h3>

</div>

<p className="text-sm text-gray-400 leading-relaxed">

Authentic Hyderabadi biryani served with traditional
spices and fresh ingredients in Miryalaguda. Enjoy
delicious meals with family and friends.

</p>

</div>

{/* Quick Links */}

<div>

<h4 className="text-lg font-semibold mb-4 text-white">
Quick Links
</h4>

<ul className="space-y-2 text-sm">

<li>
<a href="#home" className="hover:text-yellow-400 transition">
Home
</a>
</li>

<li>
<a href="#menu" className="hover:text-yellow-400 transition">
Menu
</a>
</li>

<li>
<a href="#about" className="hover:text-yellow-400 transition">
About
</a>
</li>

<li>
<a href="#contact" className="hover:text-yellow-400 transition">
Contact
</a>
</li>

</ul>

</div>

{/* Contact Info */}

<div>

<h4 className="text-lg font-semibold mb-4 text-white">
Contact
</h4>

<p className="text-sm mb-2">
📍 VH74+726, Saibaba Temple Road
</p>

<p className="text-sm mb-2">
Miryalaguda, Telangana 508207
</p>

<p className="text-sm mb-2">
📞 9676462290
</p>

<p className="text-sm">
🕒 Open Daily: 11:00 AM – 11:00 PM
</p>

</div>

</div>

{/* Bottom Bar */}

<div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">

© {new Date().getFullYear()} Dawath Biryani. All Rights Reserved.

</div>

</footer>

)

}

export default Footer