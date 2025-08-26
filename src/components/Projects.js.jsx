import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Network Security Dashboard",
      desc: "Built a SIEM-based dashboard to monitor threats in real-time.",
      link: "#",
      image: "/securitydashboard.jpg"
    },
    {
      title: "Cloud Infrastructure Setup",
      desc: "Deployed scalable infrastructure on AWS with Terraform & Ansible.",
      link: "#",
      image: "/cloudsetup.jpeg"
    },
    {
      title: "DevSecOps Pipeline",
      desc: "Integrated security tools into CI/CD for automated vulnerability scanning.",
      link: "#",
      image: "/devsecops.png"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-12 md:py-20 px-4 md:px-6 bg-black-50">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        ⚡ Projects
      </h2>

      {/* Container with max width + padding */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <img  
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-40 object-cover rounded-lg"
              />
              <h3 className="mt-2 text-lg md:text-xl font-bold text-black">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
