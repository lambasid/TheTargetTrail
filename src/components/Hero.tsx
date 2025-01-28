import { motion } from "framer-motion";
import { siteContent } from "@/config/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[600px] bg-gradient-to-br from-brand-dark via-brand-primary to-brand-light flex items-center justify-center text-brand-background"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-[4rem] font-bold mb-6 leading-tight"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-[1.5rem] mb-8 max-w-2xl mx-auto font-normal"
        >
          {hero.subtitle}
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-brand-accent text-brand-primary px-8 py-3 rounded-full font-semibold
            hover:bg-brand-accent/90 transition-all duration-200"
        >
          {hero.cta}
        </motion.button>
      </div>
    </motion.div>
  );
}
