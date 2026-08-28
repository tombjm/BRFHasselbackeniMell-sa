import type { Metadata } from 'next';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dokument | BRF Hasselbacken',
  description: 'Årsredovisningar, stadgar och energideklaration för BRF Hasselbacken i Mellösa.',
  openGraph: { title: 'Dokument | BRF Hasselbacken', description: 'Föreningens publika handlingar.', images: [] },
  twitter: { card: 'summary', title: 'Dokument | BRF Hasselbacken', description: 'Föreningens publika handlingar.', images: [] },
};

const groups = [
  { title: 'Årsredovisningar', description: 'Ger insyn i föreningens ekonomi, verksamhet och förvaltning.', docs: [
    ['Årsredovisning 2025', 'Senaste publicerade årsredovisningen', 'https://mspecsfiles2.blob.core.windows.net/0303/files/d07af250-55a1-11f1-9980-bbe7627bacda.pdf'],
    ['Årsredovisning 2024', 'Föregående verksamhetsår', 'https://media.fastighetsbyran.se/Fil/8863892'],
  ]},
  { title: 'Stadgar', description: 'Reglerar medlemmarnas rättigheter och skyldigheter samt föreningens arbete.', docs: [
    ['Föreningens stadgar', 'Publicerad version – kontrollera registreringsdatum i dokumentet', 'https://mspecsfiles2.blob.core.windows.net/0303/files/885b79f0-2fb0-11ee-8fa2-bd4a68a1ca3f.pdf'],
  ]},
  { title: 'Energideklarationer', description: 'Energideklarationer är objektspecifika. Här visas den publika handling som hittats.', docs: [
    ['Energideklaration – Jasminvägen 4 C', 'Gäller den angivna bostaden, inte automatiskt hela föreningen', 'https://mspecsfiles2.blob.core.windows.net/0303/files/bf414f20-55a1-11f1-a24f-fbfff2a7c85e.pdf'],
  ]},
];

export default function DokumentPage() {
  return <main className="inner-page">
    <SiteHeader inner />
    <section className="page-hero docs-hero"><div><p className="eyebrow light">Dokumentarkiv</p><h1>Insyn som<br />skapar trygghet.</h1></div><p>Här samlar vi publika dokument för boende, köpare, mäklare och banker.</p></section>
    <section className="archive-intro"><div><p className="eyebrow">Ordning & transparens</p><h2>Föreningens<br />viktiga handlingar.</h2></div><p>Länkarna går till offentligt publicerade original hos mäklarplattformarna där de hittades. Styrelsen bör ersätta dem med föreningens egna, versionsmärkta original före slutlig lansering.</p></section>
    <section className="archive-groups">
      {groups.map((group, i) => <div className="archive-group" key={group.title}><div className="archive-title"><span>0{i+1}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div><div className="archive-files">{group.docs.map(([name,meta,href]) => <a href={href} target="_blank" rel="noreferrer" key={name}><span className="doc-icon">PDF</span><span><strong>{name}</strong><small>{meta}</small></span><b>Öppna ↗</b></a>)}</div></div>)}
    </section>
    <section className="missing-docs"><p className="eyebrow">Rekommenderat att komplettera</p><h2>Fler dokument som hör hemma här</h2><div><span>Underhållsplan</span><span>Trivsel- eller ordningsregler</span><span>Stämmoprotokoll</span><span>Blankett för andrahandsuthyrning</span><span>Renoveringsansökan</span><span>Integritetspolicy</span></div></section>
    <SiteFooter />
  </main>;
}
