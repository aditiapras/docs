export default async function handler(req, res) {
  const getData = await fetch(process.env.NEXT_PUBLIC_BASE_URL, {
    headers: {
      "X-Base-URL": process.env.NEXT_PUBLIC_BASE,
      "X-API-Key": process.env.NEXT_PUBLIC_KEY,
    },
  }).then((r) => r.json());
  res.status(200).json({ getData });
}
