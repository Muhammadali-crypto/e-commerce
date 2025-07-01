import Link from 'next/link';

export default function FitnessPage() {
  return (
    <div style={{padding: 40, fontSize: 24}}>
      <Link href="/" style={{fontSize: 18, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 24}}>
        <span style={{fontSize: 28, marginRight: 8}}>&larr;</span> Назад
      </Link>
      <div>Фитнес - это система физических упражнений и здорового образа жизни, направленная на улучшение физической формы, укрепление здоровья и повышение общего самочувствия. Включает в себя не только физические тренировки, но и правильное питание, режим дня, а также психологическую гармонию. </div>
    </div>
  );
} 