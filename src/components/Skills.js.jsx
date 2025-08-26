import React from "react";
import { FaReact, FaNodeJs, FaCloud, FaLinux, FaLock } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { SiDocker, SiKubernetes, SiMysql, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "Docker", icon: <SiDocker size={40} className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-600" /> },
    { name: "Cloud", icon: <FaCloud size={40} className="text-indigo-500" /> },
    { name: "Linux", icon: <FaLinux size={40} className="text-black" /> },
    { name: "Cybersecurity", icon: <FaLock size={40} className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
    { name: "Data analytics", icon: <MdDataUsage size={40} className="text-orange-600" /> },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">⚡ Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl hover:scale-105 transition"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-bold text-black">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
