import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import emblemImg from "@/assets/dragon-emblem.png";

const ClosingSection = () => (
  <section className="py-32 px-6 text-center relative">
    <div className="ornament-divider w-48 mx-auto mb-16" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto"
    >
      <motion.img
        src={emblemImg}
        alt="Dragão"
        className="w-16 h-16 object-contain mx-auto mb-8 opacity-50"
        whileInView={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />

      <p className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-4">
        "Você é o fogo que aquece meu inverno e a estrela que guia minha jornada."
      </p>

      <p className="text-lg text-muted-foreground font-body italic mb-10">
        Hoje eu celebro a mulher incrível que você é. Te amo, minha Khaleesi. 🐉
      </p>

      <div className="flex items-center justify-center gap-3 text-fire">
        <Flame className="w-5 h-5" />
        <span className="font-display text-base tracking-[0.2em] uppercase font-semibold">
          Fogo e Sangue — Para Sempre
        </span>
        <Flame className="w-5 h-5" />
      </div>

      <div className="ornament-divider w-32 mx-auto mt-16" />
    </motion.div>
  </section>
);

export default ClosingSection;
