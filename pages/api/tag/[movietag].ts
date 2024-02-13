import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req, res);
    const {movietag}  = req.query;    

    if (typeof movietag !== 'string') {
      throw new Error('Invalid movietag');
    }

    if (!movietag) {
      throw new Error('Missing movietag');
    }
    
    const movies = await prismadb.movie.findMany({
        where: {
          tags: {
            has: movietag
          },
        },
      });

    return res.status(200).json(movies);
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}
