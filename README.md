# Shaheer Iqbal Portfolio 2026

A premium React developer portfolio built with Vite, Tailwind CSS, Framer Motion, React Icons, React Router, EmailJS-ready contact handling, dark/light mode, project filters, scroll progress, animated cursor glow, loading screen, and responsive layouts.

## Run Locally

```bash
npm install
npm run dev
```

## Editable Content

Most portfolio content is in `src/data/portfolio.js`.

- Projects: update the `projects` array. Look for `// ADD NEW PROJECT HERE`.
- Skills: update `technicalSkills` and `softSkills`.
- Experience: update the `experience` array.
- Certifications: update the `certifications` array.
- Contact and socials: update `personal` and `socialLinks`.
- Resume: replace `public/shaheer-cv-may-2026.pdf`.
- Profile image: add `public/profile.jpg`, then set `profileImage: "/profile.jpg"`.
- Theme colors: edit `tailwind.config.js` and `src/index.css`.

## EmailJS Setup

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these keys, the contact form remains polished and shows a setup message instead of sending.

## Build

```bash
npm run build
```
