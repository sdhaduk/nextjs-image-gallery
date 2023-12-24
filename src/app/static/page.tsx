import { UnplashImage } from "@/models/unsplash.image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Static Fetching - NextJs Image Gallery",
};

export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const image: UnplashImage = await response.json();

  const width = Math.min(image.width, 500);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetches and caches data at build time</strong>; Even
        though the Unsplash API always returns a new image, we see the same
        image after refreshing the page unless we recompile the project
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={`/users/${image.user.username}`}>{image.user.username}</Link>
    </div>
  );
}
