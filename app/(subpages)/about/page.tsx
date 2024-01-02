import { Github, Linkedin, Twitter, Mail } from "@/_components/icons";
import IconLink from "@/_components/theme/icon-link";

const iconList = [
  { icon: <Github />, href: "https://www.github.com/kimyoonduk" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/kimyoonduk" },
  { icon: <Twitter />, href: "https://www.twitter.com/kimyoonduk" },
  { icon: <Mail />, href: "/contact" },
];

const navEnd = (
  <ul className="menu menu-horizontal menu-sm pr-4 hidden sm:flex">
    {iconList.map((iconObj) => (
      <li key={iconObj.href} className="px-0.5">
        <IconLink iconComponent={iconObj.icon} href={iconObj.href} />
      </li>
    ))}
  </ul>
);

export const metadata = {
  title: "About",
  description: "About me and this website.",
  alternates: {
    canonical: "https://kimyoonduk.com/about",
  },
};

const About = () => {
  return (
    <div>
      <ul>
        <li>
          I develop speech analytics systems for patients with neurodegenerative
          disorders.
        </li>
        <li>Studied business in grad school before dropping out.</li>
        <li>
          Wrote an itinerary recommendation engine for a travel startup in
          Korea. Ask me for suggestions on places to go.
        </li>
        <li>
          This website was built in Next.js with Tailwind, DaisyUI components,
          and icons from Feather and SVG Repo. More info here.
        </li>
      </ul>
      <p></p>
      <p></p>

      <div></div>
    </div>
  );
};
export default About;
