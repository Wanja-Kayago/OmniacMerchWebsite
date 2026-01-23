// Vercel Serverless Function to handle checkout submissions
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, interestLevel, size, products, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !interestLevel || !products) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Airtable configuration - UPDATED for Personal Access Token
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Checkout Submissions';

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable credentials');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Create record in Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                'Interest Level': interestLevel,
                Size: size || 'Not specified',
                Products: products,
                Timestamp: timestamp,
                Status: 'New'
              }
            }
          ]
        })
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Airtable error:', errorData);
      return res.status(500).json({ error: 'Failed to save data' });
    }

    const data = await airtableResponse.json();
    
    return res.status(200).json({ 
      success: true, 
      message: 'Checkout submitted successfully',
      recordId: data.records[0].id
    });

  } catch (error) {
    console.error('Error processing checkout:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}