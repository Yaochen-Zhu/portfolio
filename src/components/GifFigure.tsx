export function GifFigure({
  src,
  alt,
  caption,
  width,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}) {
  return (
    <figure className="my-8 text-center">
      <img
        src={src}
        alt={alt}
        width={width}
        loading="lazy"
        className="max-w-full h-auto rounded shadow-sm"
        style={{ display: "inline-block" }}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-[var(--color-muted)] italic font-sans">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
