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
        {/* Main Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[2.5rem] font-bold mt-4 mb-6 text-brand-primary"
        >
          About Us
        </motion.h1>

        {/* First Subheading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[1.8rem] font-semibold mb-6 text-brand-primary"
        >
          {about.title[0]}
        </motion.h2>

        {/* Two paragraphs under the first subheading */}
        {about.paragraphs.slice(0, 2).map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2 }}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[2.2rem] font-bold mt-6 mb-4 text-brand-primary"
        >
          What we do
        </motion.h1>

        {/* Second Subheading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[1]}
        </motion.h2>

        {/* Single paragraph under the second subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[2] || "Add a paragraph here."}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[3] || "Add a paragraph here."}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[4] || "Add a paragraph here."}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 justify-center font-semibold leading-relaxed"
        >
          {about.paragraphs[5] || "Add a paragraph here."}
        </motion.p>
      </div>
        {/* Our Approach Para */}
      <div className="max-w-7xl mx-auto mt-20"> 
      <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[2.5rem] font-bold mt-13 mb-6 text-brand-primary"
        >
          {about.title[3]}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[6] || "Add a paragraph here."}
        </motion.p>

        {/* Second Subheading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[4] || "Add a title here."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[7] || "Add a paragraph here."}
        </motion.p>
 
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[5] || "Add a title here."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[8] || "Add a paragraph here."}
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[6] || "Add a title here."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[9] || "Add a paragraph here."}
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[7] || "Add a title here."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[10] || "Add a paragraph here."}
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[8] || "Add a title here."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[11] || "Add a paragraph here."}
        </motion.p>
        

        
      </div>
    </motion.section>
  );
}
