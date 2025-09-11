export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "pong",
      time: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

