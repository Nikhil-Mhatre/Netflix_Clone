import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const {email} = req.body    
    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (!existingUser) {
      return res.status(200).json(false);
    }

    return res.status(200).json(true);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}