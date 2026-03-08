import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ClosingSection = () => (
  <section className="py-32 px-6 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto"
    >
      <p className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed mb-8">
        "You are my today and all of my tomorrows. I love you more than words could ever say."
      </p>

      <div className="flex items-center justify-center gap-2 text-primary">
        <Heart className="w-5 h-5 fill-primary" />
        <span className="font-display text-lg font-semibold">Forever Yours</span>
        <Heart className="w-5 h-5 fill-primary" />
      </div>
    </motion.div>
  </section>
);

export default ClosingSection;
