import Link from 'next/link';

export default function TennisPage() {
  return (
    <div style={{padding: 40, fontSize: 24}}>
      <Link href="/" style={{fontSize: 18, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 24}}>
        <span style={{fontSize: 28, marginRight: 8}}>&larr;</span> Назад
      </Link>
      <div>Теннис, или большой теннис, это вид спорта, в котором два игрока или две команды по два игрока соревнуются на прямоугольной площадке, называемой кортом, разделенной сеткой. Цель игры - перекинуть мяч ракеткой через сетку так, чтобы соперник не смог его отбить. </div>
    </div>
  );
} 