
function Contact() {

  return (
<section className="bg-dark text-darkest py-10 flex items-center justify-center max-w-5xl mx-auto mt-5 rounded-3xl"> 
      <div className="text-center max-w-5xl mx-auto "> 
        <h1 className="text-7xl font-bold mb-4 ">contact me</h1>
        <p className="text-lg  sm:px-0 px-20 ">
            You can contact me at my email, <nobr><a href="mailto:nicholas.karneyenka@gmail.com" className="text-darke hover:underline">nicholas.karneyenka@gmail.com</a></nobr>
        </p>
        <p className="text-lg  sm:px-0 px-20 ">
            Or at my phone number, <nobr><a href="tel:+16095923041" className="text-darke hover:underline">+1 (609) 592-3041</a></nobr>
        </p>
      </div>
    </section>
  )
}

export default Contact
