import Image from "next/image";

type ReviewScreenshotProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** Oryginalny screenshot opinii — bez edycji treści ani awatara. */
export function ReviewScreenshot({ src, width, height, alt }: ReviewScreenshotProps) {
  return (
    <figure className="w-[min(72vw,15rem)] shrink-0 snap-center sm:w-[min(42vw,17rem)] lg:w-full lg:max-w-none">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes="(max-width: 1024px) 72vw, 25vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
