# OrbitOps AI

A dark, NASA-style **Space Mission Operations** dashboard frontend, built with React, Vite, Tailwind CSS, React Router, Recharts, and Lucide React. All data is mocked locally — there is no backend, API, or database.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router DOM 6**
- **Recharts 2** — telemetry line charts
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
 ├── components/
 │   ├── Sidebar.jsx        # Desktop navigation rail
 │   ├── Navbar.jsx         # Top bar + mobile nav
 │   ├── StatCard.jsx       # Battery / Temp / Storage / Comm cards
 │   ├── Timeline.jsx       # Mission planner timeline
 │   ├── TelemetryChart.jsx # Recharts line chart wrapper
 │   ├── AlertCard.jsx      # Anomaly alert card
 │   ├── ProcedureCard.jsx  # AI-suggested procedure checklist
 │   ├── ApprovalBox.jsx    # Approve / Reject controls
 │   └── ReplayCard.jsx     # Mission event replay entry
 ├── pages/
 │   ├── Dashboard.jsx
 │   ├── Planner.jsx
 │   ├── Telemetry.jsx
 │   ├── Anomalies.jsx
 │   ├── Procedures.jsx
 │   └── Replay.jsx
 ├── data/
 │   ├── mission.js      # Mission info + stat cards + timeline events
 │   ├── telemetry.js    # Time-series telemetry + anomaly mock data
 │   ├── procedures.js   # AI-suggested procedure mock data
 │   └── replay.js       # Mission replay event mock data
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Dashboard | Mission name, status, sim time, battery/temp/storage/comm cards, current activity |
| `/planner` | Planner | Mission timeline — observation, rotation, downlink, solar charging |
| `/telemetry` | Telemetry | Battery, temperature, and storage line charts |
| `/anomalies` | Anomalies | AI-flagged alert cards with severity, confidence, detection time, status |
| `/procedures` | Procedures | AI-suggested procedure checklists with local approve/reject state |
| `/replay` | Replay | Mission event timeline from fault injection to recovery |

## Notes

- All data lives in `src/data/*.js` as static mock JSON/JS — no network calls, no auth, no backend.
- Approve/Reject state in **Procedures** is local `useState`, reset on page reload.
- Dark theme uses a custom Tailwind palette (`space-*`) with cyan/blue accents defined in `tailwind.config.js`.

## License

MIT — free to use for personal or commercial projects.
