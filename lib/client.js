import { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient ({
//   projectId: 'e4tl5q8q',
//   dataset: 'production',
//   apiVersion: '2023-04-05',
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// });

const config = new  SanityClient ({
  projectId: 'e4tl5q8q',
  dataset: 'production',
  apiVersion: '2023-04-05',
  useCdn: false,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
