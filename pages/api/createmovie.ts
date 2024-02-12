import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const movie = await prismadb.movie.create({
      data: {
        "title": "Friends",
        "description": "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
        "tags":["Popular on Netflix","New Release", "Award-wining US Crime TV Thrillers & Mystries"],
        "videoUrl": "https://cloud.appwrite.io/v1/storage/buckets/65ca152aedf8faa4e50f/files/65ca199d793e1df23f7c/view?project=65ca14ee7a24a668ad50&mode=admin",
        "thumbnailUrl": "https://occ-0-2368-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABfSOWHZRNel6QVH6wJwnmdAVV452t7rEhJsMDkZ9W-BgOh3XQrNwEMIoQ7pd6JoJfFJTZs4KO8femyuAkpucIhxkIy4p3ycfj6k.webp?r=452",
        "genre": "Comedy",
        "duration": "2h 36m"
      }
    })

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}