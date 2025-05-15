# Vivek Nath Tiwari - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 🌓 Dark mode support
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎭 Smooth animations
- 📧 Contact form with EmailJS
- 🎯 SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- EmailJS
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio_vivek.git
cd portfolio_vivek
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css
```

## Customization

1. Update your personal information in the components
2. Replace `public/vivek_1.jpg` with your profile picture
3. Update the resume file in the public directory
4. Modify the color scheme in `tailwind.config.js`
5. Add your own projects in the `Projects.tsx` component
6. Update social links in the `Contact.tsx` and `Footer.tsx` components

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

 