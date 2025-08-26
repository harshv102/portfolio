import React from "react";

function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">👨‍💻 About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Hi, I’m <span className="font-semibold text-indigo-400">Harsh Vardhan</span> — 
          a Network & Cybersecurity Engineer passionate about{" "}
          <span className="font-semibold text-indigo-400">Cloud, DevOps, and Security Operations</span>.  
          I love solving complex IT challenges, securing infrastructures, and learning 
          the latest in technology to stay ahead in the cybersecurity space.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            📄 View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
