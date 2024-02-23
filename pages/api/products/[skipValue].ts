import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { skipValue } = req.query;

	let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skipValue}`);
	let products = await response.json();

	res.status(200).json(products);
}