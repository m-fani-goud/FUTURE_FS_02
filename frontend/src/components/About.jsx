function About(){

return(

<section
id="about"
className="py-24 bg-white"
>

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

{/* Image */}

<div className="overflow-hidden rounded-xl shadow-lg">

<img
src="/dawath.jpg"
alt="Dawath Biryani"
className="w-full h-full object-cover hover:scale-105 transition duration-500"
/>

</div>

{/* Text */}

<div>

<h2 className="text-4xl font-bold mb-6 text-gray-800">
About Dawath Biryani
</h2>

<p className="text-gray-600 leading-relaxed">

Dawath Biryani is one of the most loved restaurants in
Miryalaguda, known for its authentic Hyderabadi-style
biryani and flavorful dishes. Our chefs prepare every
dish using fresh ingredients, traditional spices, and
time-tested cooking techniques.

</p>

<p className="text-gray-600 mt-4">

From Chicken Dum Biryani to delicious starters like
Chicken 65 and Fish Manchurian, our menu is designed
to bring the rich taste of traditional Indian cuisine
to every customer.

</p>

<p className="text-gray-600 mt-4">

Visit us in Miryalaguda and enjoy a memorable dining
experience with family and friends.

</p>

</div>

</div>

</section>

);

}

export default About;