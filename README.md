# 🧭 Planner API

A RESTful API for managing collaborative trips. It allows users to create trips, invite participants, add activities, share useful links, and more.


## 🚀 Technologies

- **Fastify** — A fast and low-overhead web framework for Node.js;
- **Zod** — Schema-based data validation;
- **Prisma** — Modern and intuitive ORM;
- **TypeScript** — Statically typed JavaScript superset;
- **Nodemailer** — Email sending via SMTP;
- **Day.js** — Lightweight date manipulation;
- **Biome** — All-in-one linter and formatter;


## 📦 Installation

```bash
git clone git@github.com:devsantosbruno/api-planner.git
cd api-planner
npm install
```


## 🔧 Configuration

Create a .env file with the required environment variables:
```bash
DATABASE_URL="file:./dev.db"
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
PORT=3333
```


## 🧪 Scripts
```bash
npm run dev        # Starts the server with hot reload
```


## 📚 Endpoints

#### 📍 Participants
- GET /participants/:participantId/confirm — Confirm participant’s attendance
- GET /participants/:participantId — Get participant information

#### ✈️ Trips
- POST /trips — Create a new trip
- GET /trips/:tripId — Get trip details
- PUT /trips/:tripId — Update trip data
- GET /trips/:tripId/confirm — Confirm the trip
- GET /trips/:tripId/participants — List participants of the trip

#### 🗓 Activities
- POST /trips/:tripId/activities — Add an activity to the trip
- GET /trips/:tripId/activities — List trip activities

#### 🔗 Useful Links
- POST /trips/:tripId/links — Add a useful link to the trip
- GET /trips/:tripId/links — List trip links

#### 📧 Invitations
- POST /trips/:tripId/invites — Send invitations via email


## 🧹 Code Style

This project uses Biome for linting and formatting. To run it manually:
```bash
npx biome check .
npx biome format .
```


## 🗃 Database

This project uses Prisma as ORM. To run migrations:
```bash
npx prisma migrate dev --name [migration name]
```


## 📬 Email Sending

Invitations are sent using Nodemailer free test.

⸻

Made with 💜 by me with Rocketseat. Feel free to contribute!
