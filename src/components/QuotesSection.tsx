import { motion } from "framer-motion";

const quotes = [
  {
    text: "Eu sou o sangue do dragão. Eu não tenho medo.",
    author: "Daenerys Targaryen",
  },
  {
    text: "O amor é a morte do dever.",
    author: "Mestre Aemon",
  },
  {
    text: "Quando você joga o jogo dos tronos, ou você vence ou morre. Não existe meio-termo.",
    author: "Cersei Lannister",
  },
  {
    text: "Ela é minha rainha. Agora e sempre.",
    author: "Jon Snow",
  },
];

const QuotesSection = () => (
  <section className="py-24 px-6 bg-card relative">
    <div className="ornament-divider w-48 mx-auto mb-16" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-16"
    >
      Palavras dos{" "}
      <span className="bg-gradient-to-r from-ice to-accent bg-clip-text text-transparent">
        Sete Reinos
      </span>
    </motion.h2>

    <div className="max-w-2xl mx-auto space-y-12">
      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-body italic text-foreground/90 leading-relaxed mb-3">
            "{quote.text}"
          </p>
          <p className="text-sm font-display text-gold tracking-widest uppercase">
            — {quote.author}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuotesSection;
