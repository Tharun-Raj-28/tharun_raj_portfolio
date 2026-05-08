import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Download, ArrowRight, Code2 } from "lucide-react";
import { profile, typedRoles } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden hero-bg pt-24">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.4fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <div className="mt-4 h-10 font-mono text-xl text-primary md:text-2xl">
            <Typewriter
              words={typedRoles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Code2, href: profile.leetcode, label: "LeetCode" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full glass p-3 transition-all hover:scale-110 hover:text-primary"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full gradient-bg blur-2xl opacity-50 animate-float" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full glass shadow-glow">
              <div className="flex h-[88%] w-[88%] items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-7xl font-bold text-primary-foreground md:text-8xl">
                TR
              </div>
            </div>
            {/* Orbiting badges */}
            <div className="absolute -top-4 -right-4 rounded-2xl glass px-4 py-2 text-sm font-mono shadow-elegant animate-float" style={{ animationDelay: "1s" }}>
              ☕ Java
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl glass px-4 py-2 text-sm font-mono shadow-elegant animate-float" style={{ animationDelay: "2s" }}>
              🌱 Spring Boot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
