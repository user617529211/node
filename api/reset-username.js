let username = null;

export default function handler(req, res) {
  if (req.method === 'POST') {
    username = null;
    console.log('Username reset.');
    res.status(200).send('Username reset.');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
