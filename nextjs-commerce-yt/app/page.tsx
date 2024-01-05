import Image from 'next/image';
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-white pd-6 sm:pb-8 lg-12">
      <Hero />
    </div>
  )
}
