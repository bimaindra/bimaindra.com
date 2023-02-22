import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "components/Button";
import waveEmoji from "assets/images/waving-hand.png";

type HeroProps = {
  link: string;
  gtm?: string;
};

const Hero = ({ link, gtm }: HeroProps) => {
  const [even, setEven] = useState<boolean>();

  const getDate = () => {
    const date = new Date();
    const minute = date.getMinutes();

    if (minute % 2 === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <section className="relative min-h-[320px] md:min-h-[450px]">
      <div
        className={`bg-pattern-${
          even ? "polka" : "polka"
        } fixed top-14 bottom-auto left-0 right-0 w-full`}>
        <div className="grid min-h-[320px] place-items-center bg-slate-50 bg-opacity-10 text-center backdrop-blur-[3px] dark:bg-slate-600 dark:bg-opacity-40 md:min-h-[450px]">
          <div className="container">
            <h1 className="mb-4 flex items-center justify-center gap-x-4 text-3xl font-title md:text-4xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}>
                <Image
                  src={waveEmoji}
                  alt="Hola!"
                  width="256"
                  height="256"
                  className="emoji-hand h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16"
                />
              </motion.div>
              <TypeAnimation
                sequence={[1000, "Hola,", 1500, `Hola, I'm Bima.`]}
                speed={30}
                cursor={false}
                wrapper="span"
              />
            </h1>
            <p className="mb-6">
              {/*Web Front End Engineer from Indonesia <span className="ml-1">🇮🇩</span>*/}
              <TypeAnimation
                sequence={[5000, "Web Front End Engineer from Indonesia 🇮🇩"]}
                speed={10}
                cursor={false}
                wrapper="span"
              />
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 10 }}
              viewport={{ once: true }}>
              <Button type="link" text="More About" href={link} gtm={gtm} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
