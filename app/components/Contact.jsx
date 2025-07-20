import React, {useState} from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const apiKey = process.env.NEXT_PUBLIC_WEBTHREEFORM_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg ovo-regular">Connect With Me</h4>
      <h2 className="text-center text-5xl ovo-regular">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo-regular">I'd like to hear from you! If you have any questions, comments or feedback please use the form below.</p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-colsauto gap-6 mt-10 mb-8">
            <input type="text" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" placeholder='Enter your name' name="name" required/>
            <input type="text" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" placeholder='Enter your email' name="email" required/>
        </div>
        <textarea rows='6' placeholder='Enter your message' className='w-full p-4 mb-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="message" required></textarea>
        <button type='submit' className='cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 text-lg'>Send <i className="ri-arrow-right-line text-xl"></i></button>
      </form>

      {/* <span>{result}</span> */}
    </div>
  )
}

export default Contact
