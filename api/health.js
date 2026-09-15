export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: 'keerthivasan-portfolio-api',
    time: new Date().toISOString(),
    uptime: process.uptime()
  });
}