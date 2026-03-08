import { motion } from "framer-motion";
import { Crown, Flame, Sword, Shield, Heart, Snowflake } from "lucide-react";

const reasons = [
  { icon: Crown, text: "Você é a rainha que governa meu coração com sabedoria e amor" },
  { icon: Flame, text: "Sua força é como fogo de dragão — indomável e magnífica" },
  { icon: Snowflake, text: "Como Jon Snow no inverno, eu sempre encontro calor ao seu lado" },
  { icon: Shield, text: "Você me protege com seu amor, como um escudo de aço valiriano" },
  { icon: Heart, text: "Nosso amor é como fogo e gelo — diferente, intenso e eterno" },
  { icon: Sword, text: "Juntos somos invencíveis, como Daenerys e Jon contra a escuridão" },
];

const ReasonsSection = () => (
  <section className="py-24 px-6 relative">
    <div className="ornament-divider w-48 mx-auto mb-16" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-4"
    >
      Por que você é minha{" "}
      <span className="bg-gradient-to-r from-fire to-accent bg-clip-text text-transparent">
        Khaleesi
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-center text-muted-foreground font-body italic mb-16 max-w-md mx-auto text-lg"
    >
      As razões pelas quais eu te escolheria em todos os Sete Reinos
    </motion.p>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {reasons.map((reason, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-card rounded-lg p-6 flex items-start gap-4 border border-border hover:border-fire/30 transition-all hover:shadow-[0_0_20px_hsl(25,90%,55%,0.1)]"
        >
          <div className="p-2.5 rounded-full bg-secondary flex-shrink-0">
            <reason.icon className="w-5 h-5 text-gold" />
          </div>
          <p className="text-foreground/90 font-body text-lg leading-relaxed">{reason.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReasonsSection;
