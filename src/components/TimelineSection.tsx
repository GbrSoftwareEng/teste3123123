import { motion } from "framer-motion";

const moments = [
  { date: "The day we met", text: "I knew from the very first moment that you were someone special." },
  { date: "Our first date", text: "Butterflies, laughter, and the beginning of something beautiful." },
  { date: "The first 'I love you'", text: "Three words that changed everything — and I've meant them every day since." },
  { date: "Every day since", text: "Each moment with you adds another beautiful chapter to our story." },
];

const TimelineSection = () => (
  <section className="py-24 px-6 bg-card">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16"
    >
      Our <span className="text-primary italic">Story</span>
    </motion.h2>

    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      {moments.map((moment, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${
            i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
          }`}
        >
          <div
            className={`absolute top-1 w-3 h-3 rounded-full bg-primary left-3 md:left-auto ${
              i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
            }`}
          />
          <p className="text-sm text-gold font-display font-semibold uppercase tracking-wider mb-1">
            {moment.date}
          </p>
          <p className="text-foreground font-body leading-relaxed">{moment.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TimelineSection;
