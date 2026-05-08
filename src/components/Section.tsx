import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full glass px-4 py-1 text-xs font-mono uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="gradient-text"> {w}</span>
              ) : (
                <span key={i}>{i ? " " : ""}{w}</span>
              )
            )}
          </h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
