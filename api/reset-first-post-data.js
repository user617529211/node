import Cors from 'cors';

let firstPuppeteerPostData = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'POST') {
    firstPuppeteerPostData = null;
    console.log('First POST data reset.');
    res.status(200).send('First POST data reset.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
