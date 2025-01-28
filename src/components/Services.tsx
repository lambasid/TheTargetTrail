import { motion } from "framer-motion";
import { siteContent } from "@/config/content";
import { getIconComponent } from "@/lib/icons";

export default function Services() {
  const { services } = siteContent;

  return (
    <div className="py-20 bg-brand-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-primary">
          {services.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.features.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[0.5rem] shadow-lg hover:shadow-xl
                transition-all duration-300 border border-brand-primary/20 hover:border-brand-primary"
            >
              <div className="text-brand-primary mb-4">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-text">
                {service.title}
              </h3>
              <p className="text-brand-text">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
