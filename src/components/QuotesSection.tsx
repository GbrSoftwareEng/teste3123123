import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

const quotes = [
  "Ser mulher é ter a força de um furacão com a delicadeza de uma flor.",
  "Você não precisa de uma coroa para ser rainha — você já nasceu sendo.",
  "Mulheres fortes criam um mundo mais bonito.",
];

const QuotesSection = () => (
  <section className="py-24 px-6 bg-card">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16"
    >
      Celebrando a <span className="text-primary italic">Mulher</span>
    </motion.h2>

    <div className="max-w-2xl mx-auto space-y-10">
      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="flex items-start gap-4"
        >
          <Flower2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
          <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
            "{quote}"
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuotesSection;
