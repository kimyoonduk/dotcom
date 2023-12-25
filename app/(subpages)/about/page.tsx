// import Link from "next/link";

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
    </div>
  );
};
export default About;
