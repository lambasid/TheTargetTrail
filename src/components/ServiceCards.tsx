import { motion } from "framer-motion";
import { siteContent } from "@/config/content";
import { getIconComponent } from "@/lib/icons";

export default function ServiceCards() {
  const { services } = siteContent;

  return (
    <section id="services" className="py-32 bg-brand-background">
      <div className="container mx-auto px-8">
        <h2 className="text-[2.5rem] font-bold text-center mb-16 text-brand-primary leading-tight">
          {services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.cards.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[0.5rem] overflow-hidden shadow-lg hover:shadow-xl
                transition-all duration-300"
            >
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {getIconComponent(service.icon)}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-brand-primary group-hover:text-brand-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
