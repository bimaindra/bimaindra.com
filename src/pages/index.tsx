import { GetStaticProps, InferGetStaticPropsType } from "next";
import { motion, Variants } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import dataTimeline from "@/data/timeline.json";

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
        className="u-safe-area relative bg-slate-100 dark:bg-slate-700">
        <div className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center bg-gradient-to-t from-slate-100 pt-14 dark:from-slate-700 sm:-top-16 lg:-top-10"></div>
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10 text-2xl font-title tracking-wide text-gray-900 dark:text-white md:text-4xl lg:mb-16">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
                Timeline...
              </span>
            </motion.h2>
            <Timeline timeline={timeline} />
          </div>
        </div>
      </section>
    </>
  );
}
