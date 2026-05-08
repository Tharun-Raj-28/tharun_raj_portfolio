import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, Download, X } from "lucide-react";
import Section from "./Section";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="certificates" eyebrow="Credentials" title="Certificates & Achievements" subtitle="Continual learning, certified.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group glass flex flex-col rounded-3xl p-6 shadow-elegant transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-4 inline-flex w-fit rounded-2xl gradient-bg p-3 text-primary-foreground">
              <Award size={20} />
            </div>
            <h3 className="font-display text-base font-bold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setActive(i)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary"
              >
                <Eye size={12} /> Preview
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary">
                <Download size={12} /> Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-2xl rounded-3xl p-8 shadow-elegant"
            >
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted">
                <X size={18} />
              </button>
              <div className="flex h-64 items-center justify-center rounded-2xl gradient-bg text-primary-foreground">
                <Award size={64} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{certificates[active].title}</h3>
              <p className="text-muted-foreground">{certificates[active].issuer} • {certificates[active].date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
