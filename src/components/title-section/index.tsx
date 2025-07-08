import * as motion from 'motion/react-client';

const TitleSection = ({ title }: { title: string }) => (
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-10 text-2xl font-title tracking-wide text-gray-900 underline decoration-sky-400 decoration-wavy decoration-2 underline-offset-4 dark:text-white md:text-3xl lg:mb-12 lg:text-4xl"
  >
    <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
      {title}
    </span>
  </motion.h2>
);

export default TitleSection;
