import { useState } from "react";
import bg from '../assets/Hero_Carousal/h2.png';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
      Date: new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' }),
      Time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    fetch("http://localhost:5000/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
   
      .then((data) => {
        alert(`Success! Message sent for ${firstName}.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
  };

  return (
    <section 
      className="w-full flex items-center justify-center rounded-2xl p-5 h-[570px] bg-[#835C3B] mt-20 mb-10 bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-1/2 p-10">
        <h1 className="text-[60px] text-white font-[Bellefair] leading-tight">Where Coffee Meets Comfort</h1>        
      </div>

      <main className='flex justify-center items-center w-1/2'>
        <div className="flex flex-col bg-white/20 backdrop-blur-lg rounded-3xl w-full max-w-md p-8">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <section className="text-left w-1/2">
                <label className="font-[ABeeZee] text-[#fff] text-[18px]">First Name</label>
                <input required type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)} className="w-full bg-transparent border-b-2 border-white outline-none text-white p-1"/>
              </section>
              <section className="text-left w-1/2">
                <label className="font-[ABeeZee] text-[#fff] text-[18px]">Last Name</label>
                <input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  className="w-full bg-transparent border-b-2 border-white outline-none text-white p-1"/>
              </section>
            </div>

            <section className="text-left w-full">
              <label className="font-[ABeeZee] text-[#fff] text-[18px]">Email</label>
              <input required  type="email"value={email} onChange={(e) => setEmail(e.target.value)}  className="w-full bg-transparent border-b-2 border-white outline-none text-white p-1"/>
            </section>

            <section className="text-left w-full">
              <label className="font-[ABeeZee] text-[#fff] text-[18px]">Phone</label>
              <input  required type="text"  value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}  className="w-full bg-transparent border-b-2 border-white outline-none text-white p-1" />
            </section>

            <section className="text-left w-full">
              <label className="font-[ABeeZee] text-[#fff] text-[18px]">Message</label>
              <textarea  required  value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-transparent border-b-2 border-white outline-none text-white p-1 resize-none h-20" />
            </section>

            <button type="submit"  className="mt-4 border-2 border-[#835C3B] py-2 px-5 font-bold bg-[#835C3B] text-white rounded-lg hover:bg-white hover:text-[#835C3B] transition-all" > Submit</button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Form;