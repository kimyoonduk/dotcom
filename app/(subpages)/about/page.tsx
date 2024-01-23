import { Github, Linkedin, Twitter, Mail } from "@/_components/icons";
import Link from "@/_components/link";

const iconList = [
  { icon: <Github />, href: "https://www.github.com/kimyoonduk" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/kimyoonduk" },
  { icon: <Twitter />, href: "https://www.twitter.com/kimyoonduk" },
  { icon: <Mail />, href: "/contact" },
];

const linkArray = (
  <ul className="menu-horizontal menu-md px-0 py-2 lg:px-0 lg:py-0 lg:menu lg:mx-auto">
    {iconList.map((iconObj) => (
      <li key={iconObj.href} className="px-2 lg:px-0.5 mx-auto pb-2">
        <Link href={iconObj.href} newTab={true}>
          {iconObj.icon}
        </Link>
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

const homepageRepoUrl = "https://github.com/kimyoonduk/dotcom/tree/prod";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="lg:w-11/12 lg:mr-auto pl-4 prose">
        <p>
          I develop speech analytics systems for speakers with neurodegenerative
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
          <Link href={homepageRepoUrl} highlight={true} newTab={true}>
            More info here.
          </Link>
        </p>
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/12">
        <div className="flex flex-col lg:flex-row">{linkArray}</div>
      </div>
    </div>
  );
};
export default About;
