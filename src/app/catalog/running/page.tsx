import Link from 'next/link';

export default function RunningPage() {
  return (
    <div style={{padding: 40, fontSize: 24}}>
      <Link href="/" style={{fontSize: 18, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 24}}>
        <span style={{fontSize: 28, marginRight: 8}}>&larr;</span> Назад
      </Link>
      <div>Бег – это способ передвижения человека и животных, характеризующийся наличием фазы "полета" и осуществляемый в результате координированной работы мышц и конечностей. Это также вид спорта, в частности, дисциплина лёгкой атлетики. Кроме того, бег может быть метафорическим обозначением быстрого движения или течения времени. </div>
    </div>
  );
} 