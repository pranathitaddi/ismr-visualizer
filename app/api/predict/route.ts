const BACKEND_URL = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5328';

async function proxy(request: Request, endpoint: string) {
  const targetUrl = `${BACKEND_URL.replace(/\/$/, '')}/${endpoint}`;
  const body = await request.text();

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: {
      'Content-Type': request.headers.get('content-type') ?? 'application/json',
    },
    body,
  });

  const payload = await response.text();

  return new Response(payload, {
    status: response.status,
    headers: {
      'content-type': response.headers.get('content-type') ?? 'application/json',
    },
  });
}

export async function POST(request: Request) {
  return proxy(request, 'predict');
}
