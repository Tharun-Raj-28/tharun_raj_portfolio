import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";
import Section from "./Section";
import { about, education, internship } from "@/data/portfolio";

const stats = [
  { icon: Award, label: "CGPA", value: "8.34" },
  { icon: Briefcase, label: "Internship", value: "TECHSTAR" },
  { icon: GraduationCap, label: "Year", value: "2023–27" },
  { icon: Users, label: "Sympo Leadership", value: "Xeniox'26" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me" subtitle="Backend-focused engineer with full-stack instincts and a builder mindset.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {about.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-4 text-center">
                <Icon className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-display text-lg font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass rounded-3xl p-6 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="rounded-xl gradient-bg p-2.5 text-primary-foreground">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold">Education</h3>
                <p className="text-xs text-muted-foreground">{education.duration}</p>
              </div>
            </div>
            <p className="mt-4 font-semibold">{education.school}</p>
            <p className="text-sm text-muted-foreground">{education.degree}</p>
            <p className="mt-2 text-sm">CGPA: <span className="font-bold text-primary">{education.cgpa}</span></p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="rounded-xl gradient-bg p-2.5 text-primary-foreground">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold">{internship.company}</h3>
                <p className="text-xs text-muted-foreground">{internship.duration}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {internship.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
