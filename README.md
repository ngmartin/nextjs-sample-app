This is a sample app using Next.js with the App Router feature.

<img width="1440" alt="Screenshot 2024-09-20 at 01 21 10" src="https://github.com/user-attachments/assets/bbfd4ed8-2332-4fe5-af9c-48080d9ea585">

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- React
- Next.js
- Ant Design
- Tailwind CSS
- SWR
- TypeScript
- Biome: ESLint + Prettier

## Backend

Data source: [champion.json](https://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion.json)

API: [http://localhost:3000/api/champions](http://localhost:3000/api/champions)

Caveats:

- Input validation is needed.
- Storing all the data in memory from the data source is not an ideal approach.
- Error handling is required.
- Unit tests.

## Frontend

Caveats:

- Ant Design doesn't fully support server components.
- The design is responsive but not optimized for mobile devices.
- Error handling needs improvement.
- Unit tests.
