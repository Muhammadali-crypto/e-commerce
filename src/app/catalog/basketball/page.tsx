import Link from 'next/link';

export default function BasketballPage() {
  return (
    <div style={{padding: 40, fontSize: 24, background: '#fafaf7', minHeight: '100vh'}}>
      <Link href="/" style={{fontSize: 20, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 32, fontWeight: 500, transition: 'color 0.2s'}}>
        <span style={{fontSize: 32, marginRight: 10, transition: 'transform 0.2s'}}>&larr;</span>
        <span style={{borderBottom: '1px dashed #2563eb'}}>Назад</span>
      </Link>
      <div style={{marginTop: 32, fontSize: 32, fontWeight: 600}}>Баскетбол — страница в разработке</div>
      <div style={{marginTop: 24, fontSize: 20, color: '#444', maxWidth: 700, lineHeight: 1.6}}>
        Баскетбол — это динамичная игра, требующая отличной координации, скорости и командной работы. В скором времени здесь появится широкий ассортимент товаров для баскетбола: мячи, кольца, щиты, экипировка и аксессуары для тренировок. Оставайтесь с нами!
      </div>
    </div>
  );
} 