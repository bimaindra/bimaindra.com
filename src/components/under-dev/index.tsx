import Image from 'next/image';
import Winking from '@/assets/images/winking-face.webp';

const UnderDev = () => {
  return (
    <div className="lg:w/1/2 absolute left-4 right-4 top-1/2 mx-auto flex -translate-y-1/2 flex-col items-center gap-4 text-center md:max-w-screen-lg">
      <h1 className="text-lg leading-relaxed md:text-xl">
        This page is under development. <br /> Come back soon for a better
        experience.
      </h1>
      <Image src={Winking} width="40" height="40" alt="Under Maintenance" />
    </div>
  );
};

export default UnderDev;
