
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router) {
      setIsRouterReady(true);
    }
  }, [router]);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-[Poppins]">
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-md z-50 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide font-[Playfair Display]">Glow Hair Studio</h1>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#booking">Booking</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        <section
          className="relative h-screen bg-cover bg-center flex items-center justify-center text-white font-[Playfair Display]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-d6d1757c33d5?auto=format&fit=crop&w=1470&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Where Beauty Begins
            </motion.h2>
            <p className="text-lg max-w-xl mx-auto drop-shadow-sm font-[Poppins]">
              Luxury hair care and styling tailored just for you.
            </p>
            {isRouterReady && (
              <button
                onClick={() => router.push("#booking")}
                className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition"
              >
                Book Now
              </button>
            )}
          </div>
        </section>

        {/* Rest of your code remains unchanged */}
      </main>
    </>
  );
}
