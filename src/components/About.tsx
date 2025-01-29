import { motion } from "framer-motion";
import { siteContent } from "@/config/content";

export default function About() {
  const { about } = siteContent;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-brand-background px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[2.5rem] font-bold mb-10 text-brand-primary"
        >
          {about.title}
        </motion.h2>
        {about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            className="text-[1rem] text-brand-text mb-8 font-normal leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      
    </motion.section>
  );
}
