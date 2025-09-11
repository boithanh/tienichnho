export default async function handler(req, res) {
  try {
    const r = await fetch("https://your-render-app.onrender.com/books");
    const data = await r.json();
    return res.status(200).json({
      ok: true,
      time: Date.now(),
      count: data.length
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
