"use client";

import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingSplash() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/home"); // Redirect ke homepage setelah selesai typewriter
    }, 3500); // Durasi tampilan (bisa disesuaikan)

    return () => clearTimeout(timeout);
  }, [router]);

  return (
       <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="text-center space-y-4">
        <div className="text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to my page")
                .pauseFor(1000)
                .deleteAll(30)
                .typeString("Enjoy!")
                .start();
            }}
            options={{
              delay: 40,
            }}
          />
        </div>
      </div>
    </div>
  );
}
