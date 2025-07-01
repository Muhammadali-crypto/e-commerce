import Link from 'next/link';
import Image from 'next/image';

export default function FootballPage() {
  return (
    <div style={{padding: 40, fontSize: 24, background: '#fafaf7', minHeight: '100vh'}}>
      <Link href="/" style={{fontSize: 20, textDecoration: 'none', color: '#2563eb', display: 'inline-flex', alignItems: 'center', marginBottom: 32, fontWeight: 500, transition: 'color 0.2s'}}>
        <span style={{fontSize: 32, marginRight: 10, transition: 'transform 0.2s'}}>&larr;</span>
        <span style={{borderBottom: '1px dashed #2563eb'}}>Назад</span>
      </Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24}}>
        <Image src="/carousel1/1.png" alt="Футбол" width={220} height={220} style={{marginBottom: 24}} />
        <div style={{fontSize: 32, fontWeight: 600, marginTop: 16}}>Футбол — страница в разработке</div>
        <div style={{marginTop: 24, fontSize: 20, color: '#444', maxWidth: 700, lineHeight: 1.6}}>
          Футбол — это одна из самых популярных и захватывающих командных игр в мире. Он развивает выносливость, ловкость, командный дух и стратегическое мышление. В нашем магазине вы скоро сможете найти всё необходимое для футбольных тренировок и игр: мячи, форму, обувь, аксессуары и многое другое. Следите за обновлениями!
        </div>
      </div>
    </div>
  );
} 