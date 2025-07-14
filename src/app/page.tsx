import Hero from '@/components/hero';
import Timeline from '@/components/timeline';
import { GET_TIMELINES } from '@/config/graphql/query';
import { getClient } from '@/config/apollo/client';
import type { GetTimelinesResponse } from '@/types/api';
import CardService from '@/components/card-service';
import {
  FaCode,
  FaLaptopCode,
  FaPaintbrush,
  FaArrowTrendUp,
  FaGears,
  FaChartSimple,
} from 'react-icons/fa6';
import TitleSection from '@/components/title-section';

const services = [
  {
    title: 'Web Development',
    description:
      'Full-stack web development using modern technologies and best practices.',
    icon: <FaLaptopCode />,
  },
  {
    title: 'Design-to-Code',
    description: 'Seamless integration with third-party APIs and services.',
    icon: <FaCode />,
  },
  {
    title: 'Marketing Sites',
    description: 'Seamless integration with third-party APIs and services.',
    icon: <FaChartSimple />,
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with third-party APIs and services.',
    icon: <FaGears />,
  },
  {
    title: 'SEO Enhancement',
    description:
      'Full-stack web development using modern technologies and best practices.',
    icon: <FaArrowTrendUp />,
  },
  {
    title: 'UI/UX Enhancement',
    description: 'User-centered design and interface optimization.',
    icon: <FaPaintbrush />,
  },
];

export default async function Home() {
  const client = getClient();
  const {
    data: { timelines },
  } = await client.query<GetTimelinesResponse>({
    query: GET_TIMELINES,
  });

  return (
    <>
      <Hero link="/about" />
      <section className="u-safe-area relative bg-white dark:bg-slate-600">
        <div className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center bg-gradient-to-t from-white pt-14 dark:from-slate-600 sm:-top-14 lg:-top-10"></div>
        <div className="container">
          <div className="mx-auto flex flex-col space-y-8 md:max-w-screen-sm lg:max-w-screen-md lg:space-y-16">
            <div>
              <TitleSection title="What I Do" />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
                {services.map((service, index) => (
                  <CardService key={index} {...service} />
                ))}
              </div>
            </div>
            <hr />
            <div>
              <TitleSection title="The Journey So Far" />
              <Timeline timelines={timelines} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
