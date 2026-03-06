function Map(){

return(

<section className="py-24 bg-gray-100">

<div className="max-w-6xl mx-auto px-6">

{/* Title */}

<h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
Find Us
</h2>

{/* Grid Layout */}

<div className="grid md:grid-cols-2 gap-10 items-center">

{/* Google Map */}

<div className="rounded-xl overflow-hidden shadow-lg">

<iframe
title="Dawath Biryani Location"
className="w-full h-96 border-0"
src="https://maps.google.com/maps?q=VH74+726%20Saibaba%20Temple%20Road%20Miryalaguda%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
loading="lazy"
/>

</div>

{/* Address Card */}

<div className="bg-white p-8 rounded-xl shadow-lg">

<h3 className="text-2xl font-semibold mb-4 text-gray-800">
Dawath Biryani
</h3>

<p className="text-gray-600 mb-4">
Authentic Hyderabadi Biryani in Miryalaguda.
Visit us and enjoy delicious food with family and friends.
</p>

<p className="text-gray-700">
📍 VH74+726, Saibaba Temple Road
</p>

<p className="text-gray-700">
Miryalaguda, Telangana 508207
</p>

<p className="mt-4 text-gray-700">
🕒 Open Daily: 11:00 AM – 11:00 PM
</p>

</div>

</div>

</div>

</section>

);

}

export default Map;