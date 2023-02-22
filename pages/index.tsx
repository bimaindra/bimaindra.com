import { GetStaticProps, InferGetStaticPropsType } from "next";
import Hero from "components/Hero";
import Timeline from "components/Timeline";
import dataTimeline from "data/timeline.json";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      timeline: dataTimeline,
    },
  };
};

export default function Home({
  timeline,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero link="/about" gtm="hero-button-know-more" />
      <section
        id="timeline"
        className="u-safe-area shadow-spread relative -mt-1 bg-slate-100 dark:bg-slate-700">
        <div className="container">
          <div className="mx-auto md:w-3/4 lg:w-2/4">
            <h2 className="mb-10 text-2xl font-title tracking-wide text-gray-900 dark:text-white md:text-4xl lg:mb-16">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
                Timeline...
              </span>
            </h2>
            <Timeline timeline={timeline} />
          </div>
        </div>
      </section>
    </>
  );
}
