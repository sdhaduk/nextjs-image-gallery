import { UnplashImage } from "@/models/unsplash.image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Dynamic Fetching - NextJs Image Gallery",
};

// This makes the whole page revalidate
export const revalidate = 0;

export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    // Either of these options makes this particular fetch request revalidate
    {
      //    cache: "no-cache" or "no-store"
      //    next: { revalidate: 0 },
    }
  );
  const image: UnplashImage = await response.json();

  const width = Math.min(image.width, 500);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>This page <strong>fetches data dynamically</strong>; Everytime you refresh the page, you get a new image from the Unsplash API.</Alert>
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
