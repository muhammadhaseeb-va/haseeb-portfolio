'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { contact } from '@/data/portfolio';

const STATUS = { idle: 'idle', sending: 'sending', success: 'success', error: 'error' };

export default function ContactCTA() {
  const ref = useRef(null);
  useHeadlineReveal(ref);
  const [status, setStatus] = useState(STATUS.idle);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus(STATUS.error);
      setMessage("Contact form isn't configured yet — email me directly instead.");
      return;
    }

    setStatus(STATUS.sending);
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus(STATUS.success);
        setMessage("Message sent — I'll get back to you soon.");
        form.reset();
      } else {
        setStatus(STATUS.error);
        setMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus(STATUS.error);
      setMessage('Network error — please try again in a moment.');
    }
  };

  return (
    <section id="contact" ref={ref} className="section-shell">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-display-lg">
            <span className="line-mask">
              <span>Get in touch</span>
            </span>
          </h2>
          <p className="reveal lead mt-4 max-w-md text-ash">
            Have a project, an opportunity, or just want to say hi? My inbox is open.
          </p>

          <div className="reveal mt-8 space-y-3 text-sm text-ash">
            <p className="chip w-fit">
              <i className="fas fa-envelope text-signal" aria-hidden="true" /> {contact.email}
            </p>
            <p className="chip w-fit">
              <i className="fas fa-phone text-signal" aria-hidden="true" /> {contact.phone}
            </p>
            <p className="chip w-fit">
              <i className="fas fa-location-dot text-signal" aria-hidden="true" /> {contact.location}
            </p>
          </div>

          <div className="reveal relative mt-8 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image src={contact.image} alt="" fill sizes="360px" className="object-contain" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reveal panel space-y-4 p-6 md:p-8">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-bone/15 bg-night/60 px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-signal"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-lg border border-bone/15 bg-night/60 px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-signal"
              />
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Phone</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-lg border border-bone/15 bg-night/60 px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-signal"
            />
          </label>

          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="w-full rounded-lg border border-bone/15 bg-night/60 px-4 py-3 text-sm text-bone placeholder:text-ash focus:border-signal"
            />
          </label>

          <button
            type="submit"
            disabled={status === STATUS.sending}
            className="btn btn-primary w-full disabled:opacity-60"
          >
            {status === STATUS.sending ? 'Sending…' : 'Send message'}
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </button>

          {message && (
            <p
              role="status"
              className={`text-center text-sm font-medium ${
                status === STATUS.success ? 'text-signal' : 'text-lantern'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
