import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const initial = { name: "", phone: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^[\d+\s-]{10,15}$/.test(values.phone.trim())) errors.phone = "Enter a valid mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.message.trim()) errors.message = "Tell us a little about your requirement.";
  return errors;
}

export default function ContactForm({ light = false }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fieldCls = `w-full border-b bg-transparent px-1 py-3 text-base outline-none transition-colors ${
    light
      ? "border-graphite/30 text-obsidian placeholder:text-graphite/60 focus:border-brabus"
      : "border-carbonline text-ivory placeholder:text-ash/60 focus:border-brabus"
  }`;
  const labelCls = `eyebrow mb-2 block ${light ? "text-graphite" : "text-ash"}`;
  const errCls = "mt-1.5 text-xs text-brabus";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // No backend is wired up for this assignment — in production this would
      // POST to a CRM/lead endpoint. We simulate a successful submission.
      setSubmitted(true);
      setValues(initial);
    }
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-start gap-4 border p-8 ${light ? "border-graphite/20" : "border-carbonline"}`}>
        <CheckCircle2 className="text-brabus" size={36} />
        <h3 className={`font-display text-2xl ${light ? "text-obsidian" : "text-ivory"}`}>Enquiry Received</h3>
        <p className={light ? "text-graphite" : "text-ash"}>
          Thank you for your interest in M3M BRABUS Residences. Our relationship manager will get in touch with you shortly.
        </p>
        <button onClick={() => setSubmitted(false)} className="eyebrow text-brabus underline underline-offset-4">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact enquiry form">
      <div>
        <label htmlFor="name" className={labelCls}>Full Name</label>
        <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange}
          placeholder="Your full name" className={fieldCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name && <p id="name-error" className={errCls}>{errors.name}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelCls}>Mobile Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange}
            placeholder="+91 98765 43210" className={fieldCls} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <p id="phone-error" className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email Address</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange}
            placeholder="you@email.com" className={fieldCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className={errCls}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea id="message" name="message" rows={4} value={values.message} onChange={handleChange}
          placeholder="Tell us about your requirement — configuration, budget, timeline..." className={fieldCls}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <p id="message-error" className={errCls}>{errors.message}</p>}
      </div>

      <button type="submit" className="eyebrow w-full border border-brabus bg-brabus px-6 py-4 text-ivory transition-colors hover:bg-brabusdeep md:w-auto">
        Submit Enquiry
      </button>
      <p className={`text-xs ${light ? "text-graphite/70" : "text-ash/70"}`}>
        By submitting, you consent to being contacted by our sales team regarding M3M BRABUS Residences.
      </p>
    </form>
  );
}
