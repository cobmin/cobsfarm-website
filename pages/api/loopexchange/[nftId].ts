import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { nftId } = req.query;

    try {
        const response = await fetch(`https://loopexchange.art/collection/cobsfarm/item/${nftId}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
}
