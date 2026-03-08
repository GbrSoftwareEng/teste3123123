import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import flowersImg from "@/assets/flowers.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
    <motion.img
      src={flowersImg}
      alt="Buquê de flores"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.4, bounce: 0.3 }}
      className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6"
    />

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight"
    >
      Feliz Dia <br />
      <span className="text-primary italic">das Mulheres</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg font-body"
    >
      Para a mulher mais incrível que eu conheço — você merece o mundo inteiro. 💕
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="mt-12 text-muted-foreground animate-bounce"
    >
      <span className="text-sm tracking-widest uppercase">Deslize para baixo</span>
    </motion.div>
  </section>
);

export default HeroSection;
