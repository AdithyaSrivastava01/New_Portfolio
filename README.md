# Adithya Srivastava - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my work as a Software Engineer and Machine Learning enthusiast.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Form Handling**: React Hook Form
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📱 Sections

- **Hero**: Professional introduction with call-to-action
- **About**: Personal background and education
- **Experience**: Work history with detailed descriptions
- **Projects**: Featured projects with live demos and source code
- **Skills**: Technical skills organized by category
- **Contact**: Contact form with validation and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AdithyaSrivastava01/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── sections/        # Page sections
├── data/                # Static data and content
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── assets/              # Images and other assets
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content

Update the content in `src/data/portfolio.ts` to reflect your own:
- Experience
- Projects
- Skills
- Education

### Contact Form

The contact form is ready to integrate with:
- EmailJS
- Netlify Forms
- Custom backend API

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Code splitting and tree shaking
- **Images**: Lazy loading and WebP format support

## 🔒 Security

- No sensitive data in client-side code
- Secure contact form validation
- CSP headers recommended for production

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

Adithya Srivastava - [adithya@usc.edu](mailto:adithya@usc.edu)

Project Link: [https://github.com/AdithyaSrivastava01/portfolio](https://github.com/AdithyaSrivastava01/portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Inter Font](https://rsms.me/inter/)