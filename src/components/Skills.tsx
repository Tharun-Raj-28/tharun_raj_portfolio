import { motion } from "framer-motion";
import { Code2, Server, Database, Lightbulb, Wrench } from "lucide-react";
import Section from "./Section";
import { skills } from "@/data/portfolio";

const icons = {
  Programming: Code2,
  "Backend & Frameworks": Server,
  Databases: Database,
  Concepts: Lightbulb,
  Tools: Wrench,
} as const;

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Stack" subtitle="The technologies I use to design, build, and ship.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, items], i) => {
          const Icon = icons[cat as keyof typeof icons];
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass relative overflow-hidden rounded-3xl p-6 shadow-elegant transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-2xl gradient-bg p-3 text-primary-foreground shadow-glow">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold">{cat}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
