import { motion } from "framer-motion";
import { Crown, Flame, Sword, Shield, Heart, Snowflake } from "lucide-react";

const reasons = [
  { icon: Crown, text: "Você é uma das mulheres mais importantes da minha vida, te acho muito foda pelo seu jeito e pela pessoa que é." },
  { icon: Flame, text: "Gosta de dragões, principalmente a Meleys. Porque mano, ela é muito rápida mesmo!" },
  { icon: Shield, text: "A maneira como você enxerga a vida, as pessoas e lida com isso é com certeza o que eu mais admiro em ti." },
  { icon: Sword, text: "Apaixonada por motos, e torço por ti para que consiga realizar seu sonho de ter uma!" },
  { icon: Snowflake, text: "Sua companhia me faz muito bem, desde que começamos a conversar todos os dias, trocar ideias, resenhar, me sinto mais disposto em todos os campos, obrigado!" },
  { icon: Heart, text: "Se eu fosse listar tudo mesmo, essa página não teria fim. Só quero te dizer que te amo muito!" },
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
