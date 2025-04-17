# Blessing Weaver

A Next.js application that provides spiritual blessings in English and Hindi. The app allows users to generate random blessings, save their favorites, and create custom blessing images to download and share.

## Features

- Random blessing generator with language selection (English/Hindi)
- Save favorite blessings to your collection
- Create and download custom blessing images
- Mobile-responsive design
- Navigation between pages

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/blessing-weaver-next.git
   cd blessing-weaver-next
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

- `src/app/page.tsx` - The home page with the blessing generator
- `src/app/create/page.tsx` - The blessing image creator page
- `src/app/about/page.tsx` - The about page
- `src/components/` - Reusable UI components
- `src/data/` - JSON files with English and Hindi blessings

## Customization

### Adding More Blessings

To add more blessings, edit the JSON files in the `src/data/` directory:

- `englishBlessings.json` - For English blessings
- `hindiBlessings.json` - For Hindi blessings

### Modifying Styles

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration in `tailwind.config.ts`
2. Adding or changing CSS classes in the component files

## Deployment

You can deploy this application to any platform that supports Next.js, such as Vercel, Netlify, or a traditional server.

Example deployment to Vercel:

```bash
npm install -g vercel
vercel
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [html-to-image](https://github.com/bubkoo/html-to-image) - Generates images from HTML nodes

## License

This project is licensed under the MIT License - see the LICENSE file for details.
