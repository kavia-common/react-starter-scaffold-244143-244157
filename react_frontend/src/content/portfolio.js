/**
 * Centralized portfolio content. Update these values to personalize the site.
 */

export const portfolio = {
  name: "Alex Developer",
  role: "Frontend Engineer",
  location: "Somewhere on the Internet",
  tagline:
    "I build fast, accessible web experiences. Retro vibes, modern standards.",
  highlights: [
    { label: "React", tone: "cyan" },
    { label: "Design Systems", tone: "pink" },
    { label: "Performance", tone: "lime" }
  ],
  about: [
    "I'm a frontend engineer who likes turning messy ideas into clean interfaces.",
    "I care about accessibility, responsive layouts, and delightful details.",
    "Currently exploring: component architecture, animation, and developer experience."
  ],
  projects: [
    {
      title: "Neon Notes",
      description:
        "A small notes app with offline-first storage and buttery-smooth search.",
      tags: ["React", "LocalStorage", "Accessibility"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "CRT Dashboard",
      description:
        "A playful analytics dashboard inspired by classic terminals and synthwave.",
      tags: ["Charts", "CSS", "UI"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Portfolio Starter",
      description:
        "This very site—simple, polished, and easy to personalize.",
      tags: ["React Router", "Responsive", "Vanilla CSS"],
      links: {
        demo: "/",
        code: "#"
      }
    }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/", short: "github.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", short: "linkedin.com" },
    { label: "Email", href: "mailto:hello@example.com", short: "hello@example.com" }
  ]
};
