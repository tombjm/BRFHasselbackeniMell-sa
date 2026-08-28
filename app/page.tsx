import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

const documents = [
  { name: 'Årsredovisning 2025', meta: 'Senaste verksamhetsåret', href: 'https://mspecsfiles2.blob.core.windows.net/0303/files/d07af250-55a1-11f1-9980-bbe7627bacda.pdf' },
  { name: 'Årsredovisning 2024', meta: 'Tidigare verksamhetsår', href: 'https://media.fastighetsbyran.se/Fil/8863892' },
  { name: 'Föreningens stadgar', meta: 'Gällande version enligt publicerad mäklarannons', href: 'https://mspecsfiles2.blob.core.windows.net/0303/files/885b79f0-2fb0-11ee-8fa2-bd4a68a1ca3f.pdf' },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-photo" role="img" aria-label="Hasselbackens bostäder i Mellösa" />
        <div className="hero-shade" />
        <span className="hero-credit">Foto: Fastighetsbyrån · publicerad bostadsannons</span>
        <div className="hero-content">
          <p className="eyebrow light">Vid Mellösasjön · Södermanland</p>
          <h1>Hemma i det<br />enkla livet.</h1>
          <p className="hero-lead">En liten och naturnära bostadsrättsförening med 15 hem, egen uteplats och sjön runt hörnet.</p>
          <div className="hero-actions">
            <a className="button primary" href="#foreningen">Upptäck Hasselbacken <span>↗</span></a>
            <Link className="text-link light-link" href="/dokument">Hitta dokument <span>→</span></Link>
          </div>
        </div>
        <div className="hero-facts" aria-label="Snabbfakta">
          <div><strong>15</strong><span>bostäder</span></div>
          <div><strong>2022</strong><span>inflyttning</span></div>
          <div><strong>2</strong><span>boendetyper</span></div>
        </div>
      </section>

      <section className="intro" id="foreningen">
        <p className="eyebrow">Välkommen hem</p>
        <h2>Nära naturen.<br />Nära varandra.</h2>
        <p>Hasselbacken ligger lugnt vid Mellösasjön, med skogen bakom knuten och Mellösas service inom räckhåll. Här kombineras känslan av ett eget litet hus med tryggheten i en bostadsrättsförening.</p>
      </section>

      <section className="homes-grid" aria-labelledby="hemmen-title">
        <div className="homes-photo" role="img" aria-label="Färdigbyggda bostäder i BRF Hasselbacken"><span className="photo-credit">Foto: Fastighetsbyrån</span></div>
        <div className="homes-copy">
          <p className="eyebrow">Hemmen</p>
          <h2 id="hemmen-title">Litet till ytan.<br />Stort i känslan.</h2>
          <p>Föreningen består av tio parhusbostäder om 65 m² och fem fristående mindre hus om 23,5 m² med loft. Alla har mark i anslutning till bostaden som ingår i upplåtelsen.</p>
          <div className="type-list">
            <div><span>01</span><strong>Parhus</strong><p>3 rum · 65 m² · uteplats · externt förråd</p></div>
            <div><span>02</span><strong>Mindre hus</strong><p>23,5 m² + loft · egen uteplats och tomt</p></div>
          </div>
        </div>
      </section>

      <section className="living" id="boende">
        <div className="section-head">
          <div><p className="eyebrow">För dig som bor här</p><h2>Det viktiga,<br />nära till hands.</h2></div>
          <p>En bra föreningssida ska göra vardagen enklare. Här samlas det boende oftast behöver – ansvar, praktiska frågor och rätt väg när något händer.</p>
        </div>
        <div className="link-cards">
          <article><span className="card-no">01</span><h3>Boende & ansvar</h3><p>Föreningen ansvarar för vatten, avlopp och sophämtning. Varje medlem sköter den egna trädgården och bostadens värmepump.</p><span className="card-tag">Grundinformation</span></article>
          <article><span className="card-no">02</span><h3>Felanmälan & jour</h3><p>Vid akut fara: ring 112. Kontaktväg för fastighetsärenden läggs in så snart styrelsen har bekräftat rätt leverantör och journummer.</p><span className="card-tag pending">Behöver styrelseuppgift</span></article>
          <article><span className="card-no">03</span><h3>Ändra hemma</h3><p>Kontakta alltid styrelsen innan större förändringar. Stadgarna anger vad som kräver tillstånd och hur ansvarsfördelningen ser ut.</p><Link href="/dokument">Se stadgarna <span>↗</span></Link></article>
        </div>
      </section>

      <section className="lake-section">
        <div className="lake-copy"><p className="eyebrow light">Mellösa</p><h2>Badrocksnära<br />till sjön.</h2><p>Precis utanför området finns den kommunala badplatsen med brygga. En belyst grusväg leder mot samhällets service och busshållplats.</p></div>
        <div className="area-list">
          <div><strong>5 min</strong><span>promenad till Mellösasjön</span></div>
          <div><strong>ca 10 min</strong><span>med bil eller buss till Flen</span></div>
          <div><strong>ca 1 tim</strong><span>tåg mellan Flen och Stockholm C</span></div>
        </div>
      </section>

      <section className="documents-preview" id="dokument">
        <div className="section-head compact">
          <div><p className="eyebrow">Dokument</p><h2>Öppet och<br />ordnat.</h2></div>
          <p>Aktuella dokument ger medlemmar, köpare och mäklare en tydlig bild av föreningen. Länkarna öppnar de publika originaldokument som hittats.</p>
        </div>
        <div className="document-list">
          {documents.map((doc) => <a key={doc.name} href={doc.href} target="_blank" rel="noreferrer"><span className="doc-icon">PDF</span><span><strong>{doc.name}</strong><small>{doc.meta}</small></span><b>↗</b></a>)}
        </div>
        <div className="documents-actions"><Link className="button outline" href="/dokument">Alla dokument <span>→</span></Link><Link className="text-link" href="/maklare">Till mäklarsidan <span>↗</span></Link></div>
      </section>

      <section className="broker-cta">
        <p className="eyebrow light">Ska du sälja eller köpa?</p>
        <h2>Allt för en enklare<br />bostadsaffär.</h2>
        <Link className="button primary" href="/maklare">Information för mäklare <span>→</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
