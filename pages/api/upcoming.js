export default async function handler(req, res) {
  const getData = await fetch(process.env.NEXT_PUBLIC_BASE_URL).then((r) =>
    r.json()
  );
  res.status(200).json({ getData });
}
