import Cors from 'cors';

let password = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'POST') {
    password = null;
    console.log('Password reset.');
    res.status(200).send('Password reset.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
