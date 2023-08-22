import NextImage from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { CardProjectPropsType } from "@/types";
import { IconCalendar } from "../Icon";

const CardProject = ({
  title,
  excerpt,
  date,
  url,
  stacks,
  image,
}: CardProjectPropsType) => {
  return (
    <Card className="hover:border- group">
      <CardHeader className="flex-col overflow-hidden p-0">
        <Image
          as={NextImage}
          alt={title}
          src={image}
          width={600}
          height={340}
          radius="none"
          className="grayscale-[60%] group-hover:scale-[1.015] group-hover:grayscale-0"
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <h3 className="mb-2 text-lg font-title md:mb-4 lg:text-xl">{title}</h3>
        <p className="text-sm">{excerpt}</p>
        {stacks && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="rounded-md border py-1 px-2 font-mono text-[10px] font-medium">
                #{stack}
              </span>
            ))}
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex w-full justify-between">
          <p className="flex items-center gap-1 font-mono text-xs">
            <span>
              <IconCalendar />{" "}
            </span>
            <b className="mt-0.5">{date}</b>
          </p>
          <Link className="text-sm" showAnchorIcon href={url} target="_blank">
            Visit website.
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
