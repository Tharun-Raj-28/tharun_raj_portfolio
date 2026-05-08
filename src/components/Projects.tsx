import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Search } from "lucide-react";
import Section from "./Section";
import { featuredProjects, profile } from "@/data/portfolio";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=100`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: Repo[]) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  const languages = useMemo(() => {
    const s = new Set<string>(["All"]);
    repos.forEach((r) => r.language && s.add(r.language));
    return Array.from(s);
  }, [repos]);

  const filtered = useMemo(() => {
    return repos.filter((r) => {
      const matchLang = filter === "All" || r.language === filter;
      const q = query.toLowerCase();
      const matchQ = !q || r.name.toLowerCase().includes(q) || (r.description ?? "").toLowerCase().includes(q);
      return matchLang && matchQ;
    });
  }, [repos, filter, query]);

  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="A selection of products and experiments I've built.">
      {/* Featured */}
      <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass relative flex flex-col overflow-hidden rounded-3xl p-6 shadow-elegant transition-all hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="mb-4 flex h-32 items-center justify-center rounded-2xl gradient-bg text-4xl font-display font-bold text-primary-foreground">
              {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </div>
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary">
                <Github size={16} /> Code
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary">
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* GitHub Repos */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h3 className="font-display text-2xl font-bold">From <span className="gradient-text">GitHub</span></h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search repos..."
              className="w-full rounded-full border border-border bg-card pl-9 pr-4 py-2 text-sm outline-none focus:border-primary sm:w-56"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.slice(0, 6).map((l) => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === l ? "gradient-bg text-primary-foreground" : "border border-border hover:border-primary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-44 animate-pulse rounded-3xl glass" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">No repositories found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <motion.a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="group block rounded-2xl glass p-5 shadow-elegant transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-display font-bold group-hover:text-primary">{r.name}</h4>
                <Github size={18} className="text-muted-foreground" />
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.description ?? "No description"}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                {r.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {r.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1"><Star size={12} /> {r.stargazers_count}</span>
                <span className="inline-flex items-center gap-1"><GitFork size={12} /> {r.forks_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </Section>
  );
}
