import Cors from 'cors';

let username = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'GET') {
    if (username) {
      res.status(200).json({ username });
    } else {
      res.status(404).send('No username available.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
