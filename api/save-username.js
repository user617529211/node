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
    username = req.body.username;
    console.log('Received username:', username);
    res.status(200).send('Username saved.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
