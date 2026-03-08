import { motion } from "framer-motion";
import daenerysImg from "@/assets/daenerys-dragon.jpg";
import jonImg from "@/assets/jon-snow.jpg";

const characters = [
  {
    name: "Daenerys Targaryen",
    title: "Mãe dos Dragões",
    img: daenerysImg,
    quote: "Eu vou pegar o que é meu. Com fogo e sangue.",
  },
  {
    name: "Jon Snow",
    title: "Rei do Norte",
    img: jonImg,
    quote: "Ela é minha rainha. Agora e sempre.",
  },
];

const CharactersSection = () => (
  <section className="py-24 px-6">
    <div className="ornament-divider w-48 mx-auto mb-16" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-4"
    >
      Fogo &{" "}
      <span className="bg-gradient-to-r from-ice to-accent bg-clip-text text-transparent">
        Gelo
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-center text-muted-foreground font-body italic mb-16 max-w-md mx-auto text-lg"
    >
      Um amor que transcende os Sete Reinos
    </motion.p>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {characters.map((char, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="group relative overflow-hidden rounded-lg border border-border"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={char.img}
              alt={char.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs font-display text-gold tracking-[0.3em] uppercase mb-1">
              {char.title}
            </p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              {char.name}
            </h3>
            <p className="text-foreground/70 font-body italic text-sm">
              "{char.quote}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CharactersSection;
