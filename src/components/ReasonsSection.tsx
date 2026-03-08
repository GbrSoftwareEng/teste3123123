import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Sun, Music, Coffee } from "lucide-react";

const reasons = [
  { icon: Heart, text: "Your smile lights up my entire world" },
  { icon: Star, text: "You make even ordinary days feel magical" },
  { icon: Sparkles, text: "Your kindness inspires me every single day" },
  { icon: Sun, text: "You are my sunshine on the cloudiest days" },
  { icon: Music, text: "Every song reminds me of you" },
  { icon: Coffee, text: "Morning coffee tastes better with you" },
];

const ReasonsSection = () => (
  <section className="py-24 px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16"
    >
      Reasons I <span className="text-primary italic">Love</span> You
    </motion.h2>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {reasons.map((reason, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-card rounded-lg p-6 flex items-start gap-4 border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-2 rounded-full bg-blush flex-shrink-0">
            <reason.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-foreground font-body text-lg leading-relaxed">{reason.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReasonsSection;
