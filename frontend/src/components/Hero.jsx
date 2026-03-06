function Hero(){

return(

<section
id="home"
className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
>

{/* Background Image */}

<img
src="/hero.jpg"
alt="Dawath Biryani"
className="absolute w-full h-full object-cover"
/>

{/* Dark Overlay */}

<div className="absolute w-full h-full bg-black/60"></div>

{/* Hero Content */}

<div className="relative z-10 flex flex-col items-center px-6">

{/* Glow Effect */}

<div className="absolute w-64 h-64 bg-yellow-400 blur-[120px] opacity-30 rounded-full"></div>

{/* Logo */}

<img
src="/logo.jpg"
alt="Dawath Biryani"
className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 shadow-xl"
/>

{/* Restaurant Name */}

<h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-wide">

<span className="text-yellow-400">
Dawath
</span>{" "}
Biryani

</h1>

<p className="mt-3 text-lg md:text-2xl text-gray-200">
Authentic Hyderabadi Biryani in Miryalaguda
</p>

{/* Badges */}

<div className="flex flex-wrap justify-center gap-4 mt-6">

<span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-semibold shadow">
⭐ 4.8 Rating
</span>

<span className="bg-green-500 px-4 py-1 rounded-full font-semibold shadow">
🍗 Fresh Ingredients
</span>

</div>

{/* Button */}

<a
href="#menu"
className="mt-8 bg-yellow-500 px-8 py-3 rounded-lg text-black font-semibold hover:bg-yellow-600 transition shadow-lg"
>

Explore Menu

</a>

</div>

{/* Scroll Down */}

<a
href="#menu"
className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
>

<div className="flex flex-col items-center">

<span className="text-sm opacity-80">
Scroll
</span>

<div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mt-1">

<div className="w-1 h-3 bg-white rounded mt-2"></div>

</div>

</div>

</a>

</section>

)

}

export default Hero