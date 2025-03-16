import Cors from 'cors';

let firstPuppeteerPostData = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'GET') {
    if (firstPuppeteerPostData) {
      res.status(200).json({ postData: firstPuppeteerPostData });
    } else {
      res.status(404).send('No first POST data available.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
