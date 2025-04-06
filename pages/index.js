import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router) {
      setIsRouterReady(true);
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Glow Hair Studio</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="text-center py-20 px-4 bg-gradient-to-b from-pink-100 to-white">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Hair, Your Glow
        </motion.h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Premium hair styling, coloring, and care in a modern, welcoming studio.
        </p>
        {isRouterReady && (
          <button
            onClick={() => router.push("/booking")}
            className="px-6 py-3 bg-black text-white rounded-2xl shadow-lg hover:bg-gray-800 transition"
          >
            Book Appointment
          </button>
        )}
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white px-4">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold text-xl mb-2">Haircut & Style</h4>
            <p>Customized cuts for your face shape and lifestyle. - $60</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold text-xl mb-2">Color & Highlights</h4>
            <p>Rich colors and highlights tailored to you. - from $100</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold text-xl mb-2">Blowouts</h4>
            <p>Shiny, bouncy blowouts for every occasion. - $45</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold text-xl mb-2">Treatments</h4>
            <p>Deep conditioning, scalp care & more. - $40</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            Glow Hair Studio is where creativity meets passion. Founded in 2015, our mission is to empower every guest through beauty and style. Our talented team brings years of experience and warmth to every appointment.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white px-4">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6">Book an Appointment</h3>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="p-3 border rounded" type="text" placeholder="Full Name" required />
            <input className="p-3 border rounded" type="email" placeholder="Email Address" required />
            <input className="p-3 border rounded" type="tel" placeholder="Phone Number" required />
            <textarea className="p-3 border rounded" placeholder="What service are you booking?" rows={4}></textarea>
            <button className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">Submit</button>
          </form>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6]?.map((i) => (
              <div key={i} className="rounded overflow-hidden shadow-sm">
                <img
                  src={`https://source.unsplash.com/400x400/?hair,style,${i}`}
                  alt={`Gallery image ${i}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p className="mb-4">Email: hello@glowhairstudio.com</p>
          <iframe
            className="w-full h-64 border rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862676204116!2d-122.41941608468228!3d37.77492977975913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b9b1d0b81%3A0x1cd5d4ebf92c36cb!2sHair%20Studio!5e0!3m2!1sen!2sus!4v1647028827471!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} Glow Hair Studio. All rights reserved.
      </footer>
    </main>
  );
}
