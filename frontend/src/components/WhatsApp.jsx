import { FaWhatsapp } from "react-icons/fa";

function WhatsApp(){

return(

<a
href="https://wa.me/919676462290"
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600"
>

<FaWhatsapp size={20}/>
Order on WhatsApp

</a>

)

}

export default WhatsApp