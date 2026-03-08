import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Sun, Flower2, Crown } from "lucide-react";

const reasons = [
  { icon: Crown, text: "Você é a mulher mais forte e incrível que eu conheço" },
  { icon: Heart, text: "Seu sorriso ilumina todos os meus dias" },
  { icon: Sparkles, text: "Sua bondade e gentileza inspiram todos ao seu redor" },
  { icon: Star, text: "Você transforma momentos simples em algo mágico" },
  { icon: Sun, text: "Você é minha luz, minha paz e meu porto seguro" },
  { icon: Flower2, text: "O mundo é mais bonito porque você existe nele" },
];

const ReasonsSection = () => (
  <section className="py-24 px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4"
    >
      Por que você é <span className="text-primary italic">especial</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-center text-muted-foreground font-body mb-16 max-w-md mx-auto"
    >
      Algumas das infinitas razões pelas quais eu te admiro
    </motion.p>

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
