export async function POST(request) {
  const { email } = await request.json();
  console.log('Новая подписка:', email);
  // Здесь можно добавить сохранение в БД или отправку на email
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
} 