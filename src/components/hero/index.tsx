'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import type { HeroPropsType } from '@/types/components';
import Button from '@/components/button';
import waveEmoji from '@/assets/images/waving-hand.webp';

const ImageWave = () => {
  return (
    <>
      <Image
        src={waveEmoji}
        alt="Hola!"
        width={64}
        height={64}
        className="emoji-hand h-16 w-16"
        priority
      />
    </>
  );
};

const Hero = ({ link }: HeroPropsType) => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

  const handleFirstVisit = () => {
    if (sessionStorage.getItem('visited') == undefined) {
      sessionStorage.setItem('visited', `yes`);
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  };

  useEffect(() => {
    handleFirstVisit();
  }, []);

  return (
    <section className="relative min-h-[320px] bg-white bg-gradient-to-b from-sky-50 via-slate-50 to-sky-50 dark:from-slate-700 dark:via-slate-700 dark:to-slate-700 md:-mt-16 md:min-h-[480px]">
      <div className="fixed bottom-auto left-0 right-0 w-full bg-grid-slate-light bg-[length:28px_28px] dark:bg-grid-slate-dark">
        <div className="grid min-h-[320px] place-items-center bg-opacity-10 text-center backdrop-blur-[.5px] md:min-h-[480px]">
          <div className="max-w-lg rounded-lg p-4">
            <h1 className="mb-4 flex items-center justify-center gap-x-4 text-3xl font-title dark:text-white md:text-4xl lg:text-5xl">
              {isFirstVisit ? (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ImageWave />
                  </motion.div>
                  <TypeAnimation
                    sequence={[200, 'Hola,', 250, `Hola, I'm Bima.`]}
                    speed={50}
                    cursor={false}
                    wrapper="span"
                  />
                </>
              ) : (
                <>
                  <ImageWave /> Hola, I&apos;m Bima
                </>
              )}
            </h1>
            {isFirstVisit ? (
              <>
                <p className="mb-6 dark:text-white md:text-lg">
                  <TypeAnimation
                    sequence={[
                      2000,
                      'Web Front End Engineer from Indonesia 🇮🇩',
                    ]}
                    speed={60}
                    cursor={false}
                    wrapper="span"
                  />
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 4.25 }}
                  viewport={{ once: true }}
                >
                  <Button type="link" text="About" href={link} />
                </motion.div>
              </>
            ) : (
              <>
                <p className="mb-6 dark:text-white md:text-lg">
                  Web Front End Engineer from Indonesia{' '}
                  <span className="ml-1">🇮🇩</span>
                </p>
                <Button type="link" text="About me" href={link} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
