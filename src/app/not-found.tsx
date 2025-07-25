import Image from 'next/image';
import Winking from '@/assets/images/winking-face.webp';

export default function NotFound() {
  return (
    <div className="lg:w/1/2 absolute left-4 right-4 top-1/2 mx-auto flex -translate-y-1/2 flex-col items-center gap-4 text-center md:max-w-screen-lg">
      <h1 className="text-lg leading-relaxed md:text-xl">
        <b className="mb-4 block text-2xl md:text-3xl">Whoops! Sorry!</b> The
        web page you are looking for is currently unavailable or may have been
        removed.
        <span className="mt-2 block">Please check the URL and try again.</span>
      </h1>
      <Image src={Winking} width="40" height="40" alt="Page Not Found" />
    </div>
  );
}
