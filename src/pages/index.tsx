import { GetStaticProps, InferGetStaticPropsType } from "next";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { graphql, queryGetTimeline } from "@/graphql/query";

export const getStaticProps: GetStaticProps = async () => {
  const { timelines } = await graphql.request(queryGetTimeline);

  return {
    props: {
      timelines,
    },
    revalidate: 1800,
  };
};

export default function Home({
  timelines,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero link="/about" gtm="hero-button-know-more" />
      <section
        id="timeline"
        className="u-safe-area relative bg-white dark:bg-slate-600">
        <div className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center bg-gradient-to-t from-white pt-14 dark:from-slate-600 sm:-top-14 lg:-top-10"></div>
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10 text-2xl font-title tracking-wide text-gray-900 underline decoration-sky-400 decoration-wavy decoration-2 underline-offset-4 dark:text-white md:text-3xl lg:mb-16 lg:text-4xl">
              <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Timeline
              </span>
            </motion.h2>
            <Timeline timeline={timelines} />
          </div>
        </div>
      </section>
    </>
  );
}
