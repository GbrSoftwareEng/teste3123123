import { motion } from "framer-motion";
import heroImg from "@/assets/got-hero.jpg";
import emblemImg from "@/assets/dragon-emblem.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Daenerys e Jon Snow" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
    </div>

    <div className="relative z-10 text-center px-6">
      <motion.img
        src={emblemImg}
        alt="Emblema do dragão"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.4, bounce: 0.3 }}
        className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-6 drop-shadow-[0_0_20px_hsl(25,90%,55%,0.4)]"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-sm md:text-base text-gold font-display tracking-[0.3em] uppercase mb-4"
      >
        8 de Março — Dia Internacional da Mulher
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight"
      >
        Feliz Dia <br />
        <span className="bg-gradient-to-r from-fire via-accent to-fire-glow bg-clip-text text-transparent">
          das Mulheres
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-foreground/80 max-w-lg mx-auto font-body italic"
      >
        "Eu não sou uma princesa. Eu sou uma Khaleesi." — e você é a minha rainha.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16 text-muted-foreground animate-bounce"
      >
        <span className="text-xs tracking-[0.4em] uppercase font-display">Deslize para baixo</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
