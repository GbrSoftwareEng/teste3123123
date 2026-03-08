import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 1.2, bounce: 0.4 }}
      className="mb-8"
    >
      <Heart className="w-16 h-16 text-primary fill-primary" />
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight"
    >
      To the One <br />
      <span className="text-primary italic">I Love</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md font-body"
    >
      Every moment with you is a gift I cherish endlessly.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="mt-12 text-muted-foreground animate-bounce"
    >
      <span className="text-sm tracking-widest uppercase">Scroll down</span>
    </motion.div>
  </section>
);

export default HeroSection;
