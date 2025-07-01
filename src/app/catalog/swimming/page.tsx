import Link from 'next/link';

export default function SwimmingPage() {
  return (
    <div style={{padding: 40, fontSize: 24}}>
      <Link href="/" style={{fontSize: 18, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 24}}>
        <span style={{fontSize: 28, marginRight: 8}}>&larr;</span> Назад
      </Link>
      <div>Плавание – это вид спорта, а также способ передвижения по воде, основанный на использовании движений тела для преодоления водной среды. В спортивном смысле, плавание – это дисциплина, заключающаяся в преодолении дистанций вплавь за минимальное время, с использованием различных стилей плавания. </div>
    </div>
  );
} 