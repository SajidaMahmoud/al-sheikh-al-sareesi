import Container from "@/components/ui/Container/Container.jsx";
import Section from "@/components/ui/Section/Section.jsx";
import SectionKicker from "@/components/ui/SectionKicker/SectionKicker.jsx";
import Lines from "@/components/ui/Lines/Lines.jsx";
import { InstagramIcon, FacebookIcon } from "@/components/ui/Icons/Icons.jsx";
import { links } from "@/content/content.js";
import styles from "./Contact.module.css";

export default function Contact({ t }) {
  const c = t.contact;
  return (
    <Section id="contact">
      <Container className={styles.grid}>
        <iframe
          className={styles.map}
          title={c.mapLabel}
          src={`https://www.google.com/maps?q=${encodeURIComponent(links.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className={styles.card}>
          <SectionKicker>{c.kicker}</SectionKicker>
          <h3>{c.city}</h3>

          <div className={styles.row}>
            <span>{c.locationLabel}</span>
            <strong>
              <Lines text={c.location} />
            </strong>
          </div>
          <div className={styles.row}>
            <span>{c.phoneLabel}</span>
            <strong>
              <a href={links.phoneHref} dir="ltr">{links.phoneText}</a>
            </strong>
          </div>
          <div className={styles.row}>
            <span>{c.whatsappLabel}</span>
            <strong>
              <a href={links.whatsappHref} target="_blank" rel="noopener noreferrer" dir="ltr">
                {links.whatsappText}
              </a>
            </strong>
          </div>
          <div className={styles.row}>
            <span>{c.socialLabel}</span>
            <strong>
              <span className={styles.social}>
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              </span>
            </strong>
          </div>
        </div>
      </Container>
    </Section>
  );
}
