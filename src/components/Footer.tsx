import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground content-center">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full glass p-2 hover:text-primary"><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full glass p-2 hover:text-primary"><Linkedin size={16} /></a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" className="rounded-full glass p-2 hover:text-primary"><Code2 size={16} /></a>
          <a href={`mailto:${profile.email}`} className="rounded-full glass p-2 hover:text-primary"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
