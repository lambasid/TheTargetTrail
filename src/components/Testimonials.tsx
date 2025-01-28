import { motion } from "framer-motion";
import { siteContent } from "@/config/content";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <div className="py-20 bg-brand-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-primary">
          {testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[0.5rem] shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-brand-text">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-brand-text/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-brand-text">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
