export default function handler(req, res) {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
    }
  
    // Sample statistics data
    const stats = {
      usersCount: 1000,
      awardedCert: 500,
      articleCount: 1500,
        aiRequestsCount: 100,

    };
  
    // Return the statistics data as JSON
    res.status(200).json(stats);
  }