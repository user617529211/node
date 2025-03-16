import Cors from 'cors';

let secondPuppeteerPostData = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'GET') {
    if (secondPuppeteerPostData) {
      res.status(200).json({ postData: secondPuppeteerPostData });
    } else {
      res.status(404).send('No second POST data available.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
