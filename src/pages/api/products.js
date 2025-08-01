// src/pages/api/products.js

let products = []; // временное хранилище в памяти

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduct = { title, description, price };
    products.push(newProduct);

    console.log('Product received:', newProduct);
    return res.status(200).json({ message: 'Product created successfully' });

  } else if (req.method === 'GET') {
    return res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
