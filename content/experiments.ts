interface IExperiments {
  title: string;
  description: string;
  link: string;
  tags: string[];
  date: string; //TODO: convert to date time
  location: string;
}

export const experiments: IExperiments[] = [
  {
    title: "Accessible Design Patterns",
    description:
      "Building common components to learn about ARIA, semantic markup and accessibility standards",
    link: "https://github.com/vickOnRails/accessible-design-patterns",
    tags: ["Semantic HTML", "CSS", "ARIA", "JavaScript"],
    date: "Jan, 2020",
    location: "github",
  },
  {
    title: "12 Weeks of UX Engineering",
    description:
      "Figuring out what UX Engineering is by learning the basics of UX & Frontend Engineering",
    link: "https://12weeks.netlify.app/",
    tags: ["Web Performance", "Semantic HTML", "CSS Layouts"],
    date: "Dec, 2019",
    location: "github",
  },
  {
    title: "My Affair With Typography",
    description:
      "30 days of learning & experimenting with basics of Typography",
    link: "https://medium.muz.li/my-affair-with-typography-fac39e75f8e7",
    tags: ["HTML", "CSS", "ARIA", "JavaScript"],
    date: "Sept, 2019",
    location: "medium",
  },
  {
    title: "100 Days of React",
    description: "A daily log of my 100days of React exercise",
    link: "https://github.com/vickOnRails/100-days-of-react",
    tags: ["React", "TypeScript", "Redux", "JavaScript"],
    date: "Sept, 2019",
    location: "github",
  },
  {
    title: "My Affair With Layouts",
    description:
      "30 days of designing unique layouts to understand visual design and hierarchy",
    link: "https://medium.muz.li/my-affair-with-layouts-f39416669f61",
    tags: ["Typography", "Visual Hierarchy", "Communication", "Visual Design"],
    date: "May, 2019",
    location: "medium",
  },
  {
    title: "50 Days of Writing",
    description:
      "Setup an experiment to write about random things everyday. My first lesson on showing up everyday",
    link: "https://medium.com/true-motility/i-reached-my-goal-bc98752d0e46",
    tags: ["Writing", "Communication", "ARIA", "JavaScript"],
    date: "Jan, 2019",
    location: "medium",
  },
];
