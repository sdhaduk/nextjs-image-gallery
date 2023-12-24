This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Description
Hosted at: nextjs-image-gallery-eta.vercel.app

This is a sample project that I used to learn the NextJs app directory and its features, including:
* static and dynamic server-side rendering
* incremental static regeneration
* client-side rendering
* route handlers
* metadata API
* and more

Every page in the project uses a different approach to fetching and caching data.

## Running Locally

After cloning the project, run:
```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note:
In order to load the data on the site, you need to get a free API key from Unsplash and add it your ".env.local" file as UNSPLASH_ACCESS_KEY.

Unsplash has a free quota of 50 requests per hour so you might start getting errors if you try too often.





