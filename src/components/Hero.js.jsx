import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      {/* big soft glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -left-24 top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-sm uppercase tracking-widest text-purple-400/80">
            Network • Cybersecurity • Cloud
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Building secure, scalable systems for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              seamless digital experiences
            </span>.
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl">
            I’m Harsh Vardhan — Network & Cybersecurity Engineer exploring DevOps and Cloud.
            I design, harden and monitor infrastructure with automation and clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              className="rounded-xl px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
            >
              Let’s Talk
            </a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: "https://github.com/harshv102", label: "GitHub" },
              { href: "https://www.linkedin.com/in/harsh-vardhan-aba190208", label: "LinkedIn" },
              { href: "mailto:hv638737@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="h-10 w-10 grid place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <div className="h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-b from-purple-600/40 to-indigo-600/20 blur-2xl" />
          </div>

          <motion.img
           src="/harsh.png.png"
           alt="Harsh Vardhan"
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           whileHover={{ scale: 1.05, rotate: 2 }} // small tilt + zoom on hover
          className="mx-auto h-[22rem] md:h-[28rem] object-cover rounded-full 
             border-4 border-purple-500 shadow-lg 
             hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition"
/>

        </div>
      </div>
    </section>
  );
}
