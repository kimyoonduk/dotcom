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
          Currently at Penn FTDC. Working on speech analytics systems for
          patients with neurodegenerative symptoms.
        </li>
        <li>PhD dropout because research is hard.</li>
        <li>
          Wrote the recommendation engine for a travel itinerary app that was
          rather popular in Korea. Ask me for tips on places to go.
        </li>
        <li>
          Have a backlog of personal projects with extremely niche usecases.
          Might share some of them here.
        </li>
      </ul>
      <p></p>
      <p></p>
    </div>
  );
};
export default About;
