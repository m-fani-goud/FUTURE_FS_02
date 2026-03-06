import { useState } from "react";
import menu from "../data/menu";

function Menu(){

const [category,setCategory] = useState("All");
const [selectedDish,setSelectedDish] = useState(null);

const categories = ["All", ...new Set(menu.map(item => item.category))];

const filteredMenu =
category === "All"
? menu
: menu.filter(item => item.category === category);

return(

<section id="menu" className="py-24 bg-gray-100 scroll-mt-24">

<div className="max-w-7xl mx-auto px-6">

{/* Title */}

<h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
Our Menu
</h2>

<p className="text-center text-gray-500 mb-12">
Delicious authentic dishes from Dawath Biryani
</p>

{/* Category Buttons */}

<div className="flex flex-wrap justify-center gap-4 mb-12">

{categories.map((cat,index)=>(

<button
key={index}
onClick={()=>setCategory(cat)}
className={`px-5 py-2 rounded-full font-semibold border transition
${category===cat
? "bg-yellow-500 text-black shadow-md"
: "bg-white text-gray-700 hover:bg-yellow-100"
}`}
>

{cat}

</button>

))}

</div>

{/* Menu Grid */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[520px]">

{filteredMenu.map((item,index)=>(

<div
key={index}
className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group hover:-translate-y-1"
>

<div className="relative">

<img
src={item.image}
alt={item.name}
className="w-full h-52 object-cover"
/>

{/* Hover Overlay */}

<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

<button
onClick={()=>setSelectedDish(item)}
className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold shadow"
>

View Dish

</button>

</div>

{/* Price Badge */}

<span className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded-full shadow">

{item.price}

</span>

</div>

{/* Dish Info */}

<div className="p-4 text-center">

<h3 className="font-semibold text-lg text-gray-800">
{item.name}
</h3>

<p className="text-gray-500 text-sm mt-1">
{item.description}
</p>

</div>

</div>

))}

</div>

</div>

{/* Dish Modal */}

{selectedDish && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-white rounded-xl max-w-md w-full p-6 relative">

<button
onClick={()=>setSelectedDish(null)}
className="absolute top-3 right-3 text-gray-600 text-xl"
>
✕
</button>

<img
src={selectedDish.image}
alt={selectedDish.name}
className="w-full h-48 object-cover rounded"
/>

<h3 className="text-xl font-bold mt-4">
{selectedDish.name}
</h3>

<p className="text-gray-500 mt-2">
{selectedDish.description}
</p>

<p className="text-yellow-600 font-bold text-lg mt-3">
{selectedDish.price}
</p>

</div>

</div>

)}

</section>

)

}

export default Menu;