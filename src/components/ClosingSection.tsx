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
      <p className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed mb-4">
        "Hoje e todos os dias, eu celebro a mulher maravilhosa que você é."
      </p>

      <p className="text-lg text-muted-foreground font-body mb-10">
        Obrigado por ser quem você é. Eu te amo. 💕
      </p>

      <div className="flex items-center justify-center gap-2 text-primary">
        <Heart className="w-5 h-5 fill-primary" />
        <span className="font-display text-lg font-semibold">Com todo o meu amor</span>
        <Heart className="w-5 h-5 fill-primary" />
      </div>

      <p className="mt-8 text-sm text-muted-foreground tracking-widest uppercase">
        8 de Março — Dia Internacional da Mulher
      </p>
    </motion.div>
  </section>
);

export default ClosingSection;
