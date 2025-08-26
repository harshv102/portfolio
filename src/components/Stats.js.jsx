import React from "react";
import { motion } from "framer-motion";

const items = [
  { value: "3+", label: "Years of Experience" },
  { value: "25+", label: "Projects Completed" },
  { value: "12+", label: "Clients Served" },
  { value: "4",  label: "Certifications" },
];

export default function Stats() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center hover:bg-white/10"
          >
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {item.value}
            </div>
            <div className="mt-1 text-xs md:text-sm text-gray-400">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
