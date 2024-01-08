import { Github, Linkedin, Twitter, Mail } from "@/_components/icons";
import IconLink from "@/_components/theme/icon-link";
import Link from "@/_components/link";

const iconList = [
  { icon: <Github />, href: "https://www.github.com/kimyoonduk" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/kimyoonduk" },
  { icon: <Twitter />, href: "https://www.twitter.com/kimyoonduk" },
  { icon: <Mail />, href: "/contact" },
];

const linkArray = (
  <ul className="menu-horizontal menu-md px-0 py-2 md:px-0 md:py-0 md:menu md:mx-auto">
    {iconList.map((iconObj) => (
      <li key={iconObj.href} className="px-2 md:px-0.5 mx-auto pb-2">
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

const homepageRepoUrl = "https://github.com/kimyoonduk/kimyoonduk.com";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-5/6 md:ml-auto px-2 prose">
        <p>
          I develop speech analytics systems for patients with neurodegenerative
          disorders.
        </p>
        <p>
          Studied computer science and business in grad school before dropping
          out.
        </p>
        <p>
          Wrote an itinerary recommendation engine for a travel startup in
          Korea.
          <br />
          <Link href="/contact" highlight={true}>
            Message me
          </Link>{" "}
          for suggestions on places to go.
        </p>
        <p className="mt-4">
          This website was built in Next.js with Tailwind, DaisyUI components,
          and icons from Feather and SVG Repo.{" "}
          <Link href={homepageRepoUrl} highlight={true}>
            More info here.
          </Link>
        </p>
      </div>
      <div className="w-1/2 md:w-1/6">
        <div className="flex flex-col md:flex-row">{linkArray}</div>
      </div>
    </div>
  );
};
export default About;
