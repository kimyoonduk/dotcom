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
          symptoms.
        </li>
        <li>Studied business in grad school before dropping out.</li>
        <li>
          Wrote an itinerary recommendation engine for a travel startup in
          Korea. Ask me for suggestions on places to go.
        </li>
        <li>
          Have a backlog of personal projects with extremely niche usecases.
          Might share some of them here.
        </li>
        <li>
          This page was built in Next.js with Tailwind, DaisyUI components, and
          icons from Feather and SVG Repo.
        </li>
      </ul>
      <p></p>
      <p></p>
    </div>
  );
};
export default About;
