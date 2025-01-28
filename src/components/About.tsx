import { motion } from "framer-motion";
import { siteContent } from "@/config/content";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-32 bg-brand-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.5rem] font-bold mb-8 text-brand-primary leading-tight">
              {about.title}
            </h2>
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[1rem] text-brand-text mb-8 font-normal leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-brand-secondary text-brand-background px-8 py-3 rounded-[0.5rem] font-semibold
              hover:bg-brand-secondary/90 transition-all duration-200"
            >
              {about.cta}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-[0.5rem] overflow-hidden shadow-lg">
              <img
                src={about.image}
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
