import Lines from "./Lines.jsx";
import { links } from "../content.js";

export default function Contact({ t }) {
  const c = t.contact;
  return (
    <section id="contact">
      <div className="container location">
        <div className="map" aria-label={c.mapLabel}>
          <div className="pin" />
        </div>

        <div className="location-card">
          <div className="section-kicker">{c.kicker}</div>
          <h3>{c.city}</h3>

          <div className="contact-row">
            <span>{c.locationLabel}</span>
            <strong>
              <Lines text={c.location} />
            </strong>
          </div>
          <div className="contact-row">
            <span>{c.phoneLabel}</span>
            <strong>
              <a href={links.phoneHref}>{links.phoneText}</a>
            </strong>
          </div>
          <div className="contact-row">
            <span>{c.socialLabel}</span>
            <strong>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              {" · "}
              <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
