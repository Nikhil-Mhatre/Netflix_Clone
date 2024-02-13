import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const movie = await prismadb.movie.create({
      data: {
        "title": "Breaking Bad",
        "description": "Being forced to reveal the truth about his illness leaves Walt facing the dilemma of how to pay for an expensive series of cancer treatments.",
        "tags":["Award-wining US Crime TV Thrillers & Mystries"],
        "videoUrl": "https://cloud.appwrite.io/v1/storage/buckets/65ca152aedf8faa4e50f/files/65ca6bf7445a4a27539a/view?project=65ca14ee7a24a668ad50&mode=admin",
        "thumbnailUrl": "https://occ-0-2368-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABYIWwzftYFhohxbceaZGPYPr8na_RNwTBGu6pH6tCoTVg85wody4V4s1D3iP4UD1SiT7cN6PKrQ_reZ9pRA6YDOrKyIxAFgWR68.webp?r=01d",
        "genre": "Action Drama Suspense",
        "duration": "2h 36m"
      }
    })

    

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}