import Link from 'next/link';

export function SiteHeader({ inner = false }: { inner?: boolean }) {
  return (
    <header className={`site-header${inner ? ' site-header-inner' : ''}`}>
      <Link href="/" className="brand" aria-label="BRF Hasselbacken, startsida">
        <span className="brand-mark">H</span>
        <span><strong>BRF Hasselbacken</strong><small>Mellösa</small></span>
      </Link>
      <nav aria-label="Huvudmeny">
        <Link href="/#foreningen">Föreningen</Link>
        <Link href="/#boende">För boende</Link>
        <Link href="/dokument">Dokument</Link>
        <Link href="/maklare">För mäklare</Link>
      </nav>
      <Link className="header-contact" href="/#kontakt">Kontakta oss</Link>
    </header>
  );
}
