// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-zoom relative text-center">
          <Image src="/Untitled.png" alt="Aritsan Logo" width={150} height={150} />
          <h1 className="text-4xl font-bold mt-4 text-purple-600">ARITSAN</h1>
        </div>
        <style jsx>{`
          .animate-zoom {
            animation: zoomIn 2s ease-in-out;
          }
          @keyframes zoomIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>ARITSAN | One Stop Interior Solutions</title>
        <meta name="description" content="One-stop solution for luxury kitchen & home makeovers. Your idea, our solution." />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Image src="/Untitled.png" alt="Aritsan Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-purple-600">ARITSAN</h1>
          </div>
          <div className="space-x-4 hidden md:block">
            <Link href="/about">About Us</Link>
            <Link href="/wardrobes">Wardrobes</Link>
            <Link href="/kitchens">Kitchens</Link>
            <Link href="/taste">Find Your Taste</Link>
            <Link href="/consultation">Book a Call</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </header>

      <main style={{ backgroundImage: "url('/grey-texture.jpg')" }} className="bg-cover bg-no-repeat text-gray-800">
        <section className="py-20 text-center px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">Your Idea, Our Solution</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            At ARITSAN, we specialize in one-stop interior solutions for kitchens and home makeovers. Whether you're dreaming of sleek contemporary lines or timeless classics, we bring your ideas to life with ergonomic, space-saving designs—crafted beautifully and affordably.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 px-8 py-16">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Modular Kitchens</h3>
            <p className="mb-4">Explore trending designs like Acrylic, Contemporary, and Matte finishes. Ideal layouts, premium materials, and functionality.</p>
            <Link href="/kitchens" className="text-purple-600 font-medium">View More</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Wardrobe Designs</h3>
            <p className="mb-4">Sliding, Hinged, Walk-ins and more. Discover stylish, space-saving designs with elegant finishes and ergonomic storage.</p>
            <Link href="/wardrobes" className="text-purple-600 font-medium">View More</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Find Your Own Taste</h3>
            <p className="mb-4">A tailored style quiz to match your interior vibe. Discover your perfect home feel.</p>
            <Link href="/taste" className="text-purple-600 font-medium">Coming Soon</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Consultation Call</h3>
            <p className="mb-4">Book a session with our design experts to bring your dream to life – from sketch to space.</p>
            <Link href="/consultation" className="text-purple-600 font-medium">Coming Soon</Link>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-6 text-center">
        <p>Contact Us | Mahipalpur, Delhi – Jaipur Expressway</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} ARITSAN. All rights reserved.</p>
      </footer>
    </>
  );
}
