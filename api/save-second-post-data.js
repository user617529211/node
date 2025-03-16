import Cors from 'cors';

let secondPuppeteerPostData = null;

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await cors(req, res, () => {});

  if (req.method === 'POST') {
    secondPuppeteerPostData = req.body.postData;
    console.log('Received second POST data from Puppeteer:', secondPuppeteerPostData);
    res.status(200).send('Second POST data saved.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
