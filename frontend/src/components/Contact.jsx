import { useState } from "react";
import axios from "axios";

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
});

const [success,setSuccess] = useState(false);
const [loading,setLoading] = useState(false);

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const submitForm = async (e)=>{
e.preventDefault();

try{

setLoading(true);

await axios.post(
"http://localhost:5000/api/contact",
form
);

setSuccess(true);

setForm({
name:"",
email:"",
message:""
});

}catch(error){
console.log(error);
}

setLoading(false);

};

return(

<section
id="contact"
className="py-24 bg-gray-100"
>

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

{/* Contact Info */}

<div className="bg-white p-8 rounded-xl shadow-lg">

<h2 className="text-3xl font-bold mb-6 text-gray-800">
Contact Us
</h2>

<p className="text-gray-600 mb-6">
Have questions or want to enjoy delicious biryani?
Visit or contact Dawath Biryani.
</p>

<p className="text-gray-700 mb-2">
📍 VH74+726, Saibaba Temple Road
</p>

<p className="text-gray-700">
Miryalaguda, Telangana 508207
</p>

<p className="mt-4 text-gray-700">
📞 9676462290
</p>

<p className="mt-4 text-gray-700">
🕒 Open Daily: 11 AM – 11 PM
</p>

</div>

{/* Contact Form */}

<div className="bg-white p-8 rounded-xl shadow-lg">

{success && (

<div className="bg-green-100 text-green-700 p-4 rounded mb-4 text-center">

✅ Thank you for contacting Dawath Biryani!  
Our team will get back to you shortly.

</div>

)}

<form
onSubmit={submitForm}
className="space-y-4"
>

<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

<input
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
rows="4"
/>

<button
className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 w-full font-semibold transition"
>

{loading ? "Sending..." : "Send Message"}

</button>

</form>

</div>

</div>

</section>

);

}

export default Contact;