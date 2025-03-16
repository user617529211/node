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
    password = req.body.password;
    console.log('Received password:', password);
    res.status(200).send('Password saved.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
