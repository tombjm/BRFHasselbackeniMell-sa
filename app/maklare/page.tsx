import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Mäklarinformation | BRF Hasselbacken',
  description: 'Verifierad grundinformation och dokument för mäklare, banker, köpare och säljare i BRF Hasselbacken i Mellösa.',
  openGraph: { title: 'Mäklarinformation | BRF Hasselbacken', description: 'Grundinformation och dokument för bostadsaffären.', images: [] },
  twitter: { card: 'summary', title: 'Mäklarinformation | BRF Hasselbacken', description: 'Grundinformation och dokument för bostadsaffären.', images: [] },
};

const facts = [
  ['Juridiskt namn', 'Bostadsrättsföreningen Hasselbacken i Mellösa'],
  ['Organisationsnummer', '769640-3745'],
  ['Säte', 'Flens kommun, Södermanlands län'],
  ['Registrerad', '23 september 2021'],
  ['Föreningstyp', 'Äkta bostadsrättsförening'],
  ['Antal bostäder', '15 bostadsrätter'],
  ['Total bostadsyta', 'cirka 767,6 m²'],
  ['Byggår / inflyttning', '2022 / 1 september 2022'],
  ['Mark', 'Föreningen äger marken'],
  ['Adresser', 'Jasminvägen, 642 63 Mellösa'],
];

const brokerFaq = [
  ['Bostäderna', 'Tio parhusbostäder om 65 m² samt fem fristående mindre hus om 23,5 m² med loft. Föreningen omfattar fem fastigheter och mark i anslutning till respektive bostad ingår i upplåtelsen.'],
  ['Parkering', 'Varje hushåll har en parkeringsplats i direkt anslutning till bostaden. Uppgift om extra platser eller laddning behöver bekräftas av styrelsen.'],
  ['Förråd', 'Parhusbostäderna har externa förråd. Uppgift om förråd till de mindre husen behöver verifieras för respektive objekt.'],
  ['Värme och el', 'Varje bostad har en egen värmepump. Elförbrukning och drift är individuell och ska redovisas objektspecifikt av säljaren.'],
  ['Vatten, avlopp och avfall', 'Föreningen ansvarar enligt publicerade mäklaruppgifter för vatten/avlopp och sophämtning. Exakt avgiftsinnehåll ska bekräftas före publicering i annons.'],
  ['Underhåll och renoveringar', 'Husen färdigställdes 2022. En publicerad mäklaruppgift anger att inga planerade underhållsåtgärder fanns vid uppgiftstillfället. Kontrollera alltid senaste årsredovisning och styrelsebesked.'],
  ['Trädgård och uteplats', 'Varje medlem sköter sin egen trädgård. Markens exakta gränser, tillåtna åtgärder och eventuella bygglov ska kontrolleras mot upplåtelseavtal, stadgar och styrelse.'],
  ['Medlemskap och överlåtelse', 'Ansökan om medlemskap, pantsättning, överlåtelseavgift och eventuell pantsättningsavgift hanteras enligt stadgar och styrelsens aktuella rutiner. Belopp är inte publicerade här eftersom de behöver verifieras.'],
];

export default function MaklarePage() {
  return (
    <main className="inner-page">
      <SiteHeader inner />
      <section className="page-hero broker-hero">
        <div><p className="eyebrow light">För mäklare, banker & köpare</p><h1>En tryggare<br />bostadsaffär.</h1></div>
        <p>Här finns föreningens grunduppgifter, svar på vanliga mäklarfrågor och länkar till de viktigaste dokumenten.</p>
      </section>

      <div className="verified-bar"><span>Senast faktakontrollerad 28 augusti 2026</span><span>Uppgifter från offentliga register, årsredovisningstolkning och publicerade mäklarunderlag</span></div>

      <section className="broker-content">
        <aside className="side-index"><p>På sidan</p><a href="#grundfakta">Grundfakta</a><a href="#fragor">Vanliga frågor</a><a href="#handlingar">Handlingar</a><a href="#bekrafta">Behöver bekräftas</a></aside>
        <div>
          <section id="grundfakta" className="content-block">
            <p className="eyebrow">01 · Grundfakta</p><h2>Om föreningen</h2>
            <div className="fact-table">{facts.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          </section>

          <section id="fragor" className="content-block">
            <p className="eyebrow">02 · Vanliga frågor</p><h2>Det mäklare oftast frågar om</h2>
            <div className="faq-list">{brokerFaq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </section>

          <section id="handlingar" className="content-block">
            <p className="eyebrow">03 · Handlingar</p><h2>Dokument för affären</h2>
            <div className="broker-docs">
              <a href="https://mspecsfiles2.blob.core.windows.net/0303/files/d07af250-55a1-11f1-9980-bbe7627bacda.pdf" target="_blank" rel="noreferrer"><span>Årsredovisning 2025</span><b>PDF ↗</b></a>
              <a href="https://media.fastighetsbyran.se/Fil/8863892" target="_blank" rel="noreferrer"><span>Årsredovisning 2024</span><b>PDF ↗</b></a>
              <a href="https://mspecsfiles2.blob.core.windows.net/0303/files/885b79f0-2fb0-11ee-8fa2-bd4a68a1ca3f.pdf" target="_blank" rel="noreferrer"><span>Föreningens stadgar</span><b>PDF ↗</b></a>
            </div>
            <Link className="text-link" href="/dokument">Se hela dokumentarkivet <span>→</span></Link>
          </section>

          <section id="bekrafta" className="confirm-box">
            <span className="confirm-mark">!</span><div><h3>Bekräfta med styrelsen före annonsering</h3><p>Aktuell månadsavgift och exakt avgiftsinnehåll, kommande avgiftsändringar, lånevillkor efter senaste årsredovisningen, överlåtelse- och pantsättningsavgift, förvaltare, försäkringsbolag, bredband, laddmöjlighet, andrahandsuthyrning samt godkända renoveringar i den aktuella bostaden.</p></div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
