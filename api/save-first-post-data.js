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
    firstPuppeteerPostData = req.body.postData;
    console.log('Received first POST data from Puppeteer:', firstPuppeteerPostData);
    res.status(200).send('First POST data saved.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
