import { motion } from "framer-motion";
import { siteContent } from "@/config/content";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function About() {
  const { about } = siteContent;

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-brand-background px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.5rem] font-bold mt-4 mb-6 text-brand-primary"
        >
          About Us
        </motion.h1>

        {/* First Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-[1.8rem] font-semibold mb-6 text-brand-primary"
        >
          {about.title[0]}
        </motion.h2>

        {/* Two paragraphs under the first subheading */}
        {about.paragraphs.slice(0, 2).map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* What We Do Section */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.2rem] font-bold mt-6 mb-4 text-brand-primary"
        >
          What we do
        </motion.h1>

        {/* Second Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
        >
          {about.title[1]}
        </motion.h2>

        {/* Single paragraph under the second subheading */}
        <motion.p
          variants={itemVariants}
          className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
        >
          {about.paragraphs[2] || "Add a paragraph here."}
        </motion.p>

        {/* Additional Paragraphs */}
        {about.paragraphs.slice(3, 6).map((paragraph, index) => (
          <motion.p
            key={index + 3}
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Our Approach Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] font-bold mt-13 mb-6 text-brand-primary"
          >
            {about.title[3]}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {about.paragraphs[6] || "Add a paragraph here."}
          </motion.p>

          {/* Additional Subheadings and Paragraphs */}
          {about.title.slice(4, 9).map((title, index) => (
            <div key={index}>
              <motion.h2
                variants={itemVariants}
                className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
              >
                {title || "Add a title here."}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
              >
                {about.paragraphs[index + 7] || "Add a paragraph here."}
              </motion.p>
            </div>
          ))}

          
        </div>
          {/* How We Can Help Section */}
        <div className="max-w-7xl mx-auto mt-24">
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] font-bold mt-13 mb-6 text-brand-primary"
          >
            {about.title[9]}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {about.paragraphs[12] || "Add a paragraph here."}
          </motion.p>

          {/* Additional Subheadings and Paragraphs */}
          {about.title.slice(10, 16).map((title, index) => (
            <div key={index}>
              <motion.h2
                variants={itemVariants}
                className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
              >
                {title || "Add a title here."}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
              >
                {about.paragraphs[index+13] || "Add a paragraph here."}
              </motion.p>
              
            </div>
            
          ))}

        </div>
        <motion.p
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {about.paragraphs[19] || "Add a paragraph here."}
          </motion.p>
        
        {/* What Sets Up apart Section */}
        <div className="max-w-7xl mx-auto mt-24">
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] font-bold mt-13 mb-6 text-brand-primary"
          >
            {about.title[16]}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
          >
            {about.paragraphs[20] || "Add a paragraph here."}
          </motion.p>

          {/* Additional Subheadings and Paragraphs */}
          {about.title.slice(17, 23).map((title, index) => (
            <div key={index}>
              <motion.h2
                variants={itemVariants}
                className="text-[1.8rem] font-semibold mt-1 mb-6 text-brand-primary"
              >
                {title || "Add a title here."}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-[1rem] text-brand-text mb-6 font-normal leading-relaxed"
              >
                {about.paragraphs[index+21] || "Add a paragraph here."}
              </motion.p>
              
            </div>
            
          ))}

        </div>
      </div>
    </motion.section>
  );
}
