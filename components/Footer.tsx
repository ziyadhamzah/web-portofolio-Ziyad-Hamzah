import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, InstagramIcon, TiktokIcon } from "./Icons";

export default function Footer() {
  const socials = [
    { key: "github", href: profile.socials.github, Icon: GithubIcon, label: "GitHub" },
    { key: "linkedin", href: profile.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { key: "instagram", href: profile.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
    { key: "tiktok", href: profile.socials.tiktok, Icon: TiktokIcon, label: "TikTok" },
  ];

  return (
    <footer className="py-12 text-center border-t border-border bg-black">
      <div className="flex justify-center gap-3.5 mb-4.5">
        {socials.map(({ key, href, Icon, label }) => (
          <a
            key={key}
            href={href ?? "#"}
            aria-label={label}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all hover:bg-[#1a1a1a] hover:-translate-y-1"
          >
            <Icon className="w-4 h-4 text-white" />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted2">© 2026 {profile.name}. All rights reserved.</p>
      <p className="font-mono text-xs text-muted2 mt-1.5">Built with React.js &amp; Tailwind CSS</p>
    </footer>
  );
}
