import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, Send, Code2 } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/portfolio.ts";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const errs: Record<string, string> = {};
    if (!name || name.length > 100) errs.name = "Enter a valid name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = "Invalid email";
    if (!message || message.length > 1000) errs.message = "Message required (max 1000)";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    // Replace with EmailJS / Formspree integration
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    e.currentTarget.reset();
  };

  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Github, label: "GitHub", value: "Tharun-Raj-28", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "tharun-raj-d", href: profile.linkedin },
    { icon: Code2, label: "LeetCode", value: "tharun_raj_28", href: profile.leetcode },
  ];

  return (
    <Section id="contact" eyebrow="Say Hello" title="Get In Touch" subtitle="Have a project, role, or idea? Let's talk.">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {items.map(({ icon: Icon, label, value, href }) => {
            const Tag: any = href ? "a" : "div";
            return (
              <Tag
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="rounded-xl gradient-bg p-3 text-primary-foreground">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              </Tag>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          className="glass space-y-4 rounded-3xl p-6 shadow-elegant"
        >
          <div>
            <label className="text-xs font-medium text-muted-foreground" htmlFor="name">Name</label>
            <input id="name" name="name" maxLength={100} className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" maxLength={255} className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary" />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} maxLength={1000} className="mt-1 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary" />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <Send size={16} />
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
