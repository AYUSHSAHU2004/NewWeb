
import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '08dz2avh',

  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-02', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skgmAktK5smMOrw5Fsf8fP7jm2gnM91CuJ3BjT8Baof22eutvplbgo30PdXmS0uQDjxtw4zY7U3gBBovK8SOUqmq2GQeyqNGTEPrHMxZ8hmyBbTcMQkg8igpZE2VaW53OEyL3pXhBdEjyBK4zcR9DFuPDRQBTA6HDHn4BWiF6dGGE86NuqHl',
})

export const builder = imageUrlBuilder(client)

