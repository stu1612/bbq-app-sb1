// images
import hero from "../assets/images/hero_4.jpg";
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

export default function Contact() {
  return (
    <section>
      <section className="hero">
        <img src={hero} alt="ribs cooking on bbq" className="hero-image" />
        <h1 className="title">Contact</h1>
      </section>
      <div className="content-item container-920">
        <p className="content-p">
          The restaurant is open monday - thursday from 11-20 and friday to
          saturday 12-22. Closed sundays.
        </p>
        <p className="content-p">
          For all bookings please fill out our booking form and we will get back
          to to you
        </p>

        <ContactForm />
        <GoogleMap />
      </div>
    </section>
  );
}
