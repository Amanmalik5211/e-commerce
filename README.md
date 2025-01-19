
A responsive e-commerce dashboard built with Next.js and Material-UI.

## Tech Stack

- Next.js 14 (App Router)
- Material-UI (MUI)
- TypeScript

## Key Features

- Fully responsive design (Mobile, Tablet, Desktop)
- Modern UI with smooth animations
- Server-side rendering
- Type-safe development
- No external CSS libraries used

## Project Structure

src/

├── app/

│ ├── layout.tsx

│ └── page.tsx

├── components/

│ ├── layout/

│ │ └── Header.tsx

│ └── ui/

│ ├── BrandCard.tsx

│ └── SearchBar.tsx

├── lib/

│ └── data.ts

└── types/

└── index.ts


## Setup Instructions

1. Clone the repository

bash

git clone https://github.com/Amanmalik5211/e-commerce.git


2. Install dependencies

bash

npm install


3. Run development server

bash

npm run dev


## Key Implementation Details

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: xs, sm, md, lg, xl
   - Fluid typography and spacing

2. **Components**
   - Header with responsive search
   - Product cards with animations
   - Featured brands section
   - Special offers banner

3. **UI/UX Features**
   - Interactive hover effects
   - Smooth transitions
   - Consistent spacing
   - Accessible design

## Notes

- No external CSS libraries used
- Pure MUI styling with styled components
- TypeScript for type safety
- Next.js App Router for routing