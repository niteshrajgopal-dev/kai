# School Assignment Website

A multi-tab website for a school assignment featuring different subjects. Currently includes an interactive Geography map showing locations in Durban, South Africa and Dubai, UAE.

## Features

- 🗺️ **Geography Tab**: Interactive map with locations in Durban and Dubai
  - Click markers to explore different locations
  - Animated icons and smooth map transitions
  - Quick access buttons for favorite spots
  - World view, Durban view, and Dubai view options

- 📚 **Multiple Subject Tabs**: Easy navigation between different subjects
  - Geography (complete)
  - Mathematics (coming soon)
  - Science (coming soon)
  - History (coming soon)
  - Art (coming soon)

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Leaflet (interactive maps)
- Lucide React (icons)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Geography.jsx      # Interactive map component
│   │   └── ComingSoon.jsx     # Placeholder for other subjects
│   ├── App.jsx                # Main app with tab navigation
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Adding New Subjects

To add a new subject tab:

1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the `tabs` array
4. Update the `renderContent()` function to include your new component

## License

This is a school assignment project.


