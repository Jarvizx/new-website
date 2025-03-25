import Image from "next/image";

export default function Home() {
  const randomImage = Math.random() < 0.5 ? 'bg-pain-visible-1.jpeg' : 'bg-pain-visible-2.jpeg';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
          className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/${randomImage}')` }}
      >
      </div>
    </div>
  );
}
