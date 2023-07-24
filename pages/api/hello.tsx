import { NextApiRequest, NextApiResponse } from 'next';

const requestHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default requestHandler
