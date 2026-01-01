# StaffiX Website

A modern, multilingual website for StaffiX - Workforce Operations Automation platform.

## Features

- 🌐 **Bilingual Support**: Full English and Japanese (日本語) language support
- 🎨 **Modern Design**: Clean, professional UI with StaffiX brand colors (#22479b)
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Next.js 16**: Built with the latest Next.js features and App Router
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper focus states and keyboard navigation

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 4.6
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd staffix-web
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
staffix-web/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Homepage
│   │   ├── features/      # Features page
│   │   ├── pricing/       # Pricing page
│   │   ├── security/      # Security page
│   │   └── ...            # Other pages
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # UI components (Navigation, Footer, etc.)
│   └── sections/         # Homepage sections
├── messages/             # Translation files
│   ├── en.json           # English translations
│   └── ja.json           # Japanese translations
├── public/               # Static assets
└── i18n.ts               # i18n configuration
```

## Pages

- **Home** (`/`) - Main landing page with all sections
- **Features** (`/features`) - Detailed feature list
- **How it Works** (`/how-it-works`) - Step-by-step guide
- **Pricing** (`/pricing`) - Pricing tiers and plans
- **Security** (`/security`) - Security and trust information
- **Integrations** (`/integrations`) - Supported platforms
- **Use Cases** (`/use-cases`) - Industry use cases
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Demo request form
- **FAQ** (`/faq`) - Frequently asked questions
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Trial** (`/trial`) - Free trial signup

## Language Support

The website supports two languages:
- English (`/en`) - Default
- Japanese (`/ja`) - 日本語

Language switching is available in the navigation bar.

## Design System

### Colors
- **Primary**: #22479b (StaffiX Blue)
- **Primary Light**: #3a5fb8
- **Primary Dark**: #1a3578
- **Grays**: Full gray scale from 50-900

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 600 weight
- **Body**: Regular, 16-18px base size

### Components
- Rounded corners: 10-16px
- Card-based sections with subtle shadows
- Clean icons from Lucide React
- Ample whitespace

## Development

### Adding New Translations

1. Add keys to `messages/en.json`
2. Add corresponding translations to `messages/ja.json`
3. Use `useTranslations('key')` in components

### Adding New Pages

1. Create a new folder in `app/[locale]/`
2. Add `page.tsx` file
3. Include Navigation and Footer components
4. Add translations if needed

## Deployment

The site is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

## License

Private - All rights reserved

## Contact

For questions or support, contact: hello@staffix.co
