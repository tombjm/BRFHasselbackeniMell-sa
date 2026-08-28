import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer id="kontakt">
      <div className="footer-main">
        <div>
          <p className="eyebrow light">Kontakt</p>
          <h2>Vi hjälper dig<br />hitta rätt.</h2>
        </div>
        <div className="footer-contact">
          <p>Föreningens postadress</p>
          <address>BRF Hasselbacken i Mellösa<br />c/o styrelsen<br />Jasminvägen 3 A<br />642 63 Mellösa</address>
          <p className="contact-note">E-post och felanmälningsväg publiceras när uppgifterna har bekräftats av styrelsen.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-brand"><span className="brand-mark">H</span> BRF Hasselbacken</Link>
        <span>Org.nr 769640-3745</span>
        <div><Link href="/dokument">Dokument</Link><Link href="/maklare">Mäklarinfo</Link></div>
      </div>
    </footer>
  );
}
