'use client';

import { useEffect } from 'react';
import './ContactModal.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const ContactModal = ({ isOpen, onClose, source }: ContactModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal__logo">Kwiktable</div>
        <h3 className="modal__title">Get in touch</h3>
        <p className="modal__subtitle">
          {source
            ? <>Interested in the <strong>{source}</strong> plan? Fill in your details and our team will reach out.</>
            : <>Fill in your details and our team will reach out to you shortly.</>
          }
        </p>

        <form
          className="modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            const subject = source ? `Inquiry: ${source} Plan` : 'Inquiry from Website';
            window.location.href = `mailto:sales@kwiktable.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(String(data.name))}%0APhone: ${encodeURIComponent(String(data.countryCode))}${encodeURIComponent(String(data.phone))}%0AEmail: ${encodeURIComponent(String(data.email))}`;
            onClose();
          }}
        >
          <div className="modal__field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="modal__field">
            <label htmlFor="contact-phone">Phone number</label>
            <div className="modal__phone-group">
              <select id="contact-countryCode" name="countryCode" defaultValue="+91">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
                <option value="+65">+65</option>
                <option value="+61">+61</option>
              </select>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                required
              />
            </div>
          </div>

          <div className="modal__field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>

          <button type="submit" className="modal__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
