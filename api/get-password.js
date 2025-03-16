import Cors from 'cors';

let password = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'GET') {
    if (password) {
      res.status(200).json({ password });
    } else {
      res.status(404).send('No password available.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
