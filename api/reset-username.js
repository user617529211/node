import Cors from 'cors';

let username = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'POST') {
    username = null;
    console.log('Username reset.');
    res.status(200).send('Username reset.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

