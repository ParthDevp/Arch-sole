# Arch & Sole Clinic — React + Spring Boot + PostgreSQL

This package contains:

- `Arch_and_Sole_React/` — public React/Vite website
- `arch-and-sole-backend/` — Spring Boot 3 / Java 21 REST API
- `database/` — local PostgreSQL helper SQL
- `docker-compose.yml` — local PostgreSQL + backend

## What changed

- Expanded About Us page.
- Doctors & Staff contains exactly 3 doctor placeholders and 2 staff placeholders.
- One clinic-wide appointment form: no doctor selection.
- Public appointment requests are saved to PostgreSQL.
- Hidden clinic admin page: `/admin/appointments`.
- Admin can view all appointment requests and export them as a real `.xlsx` Excel workbook.
- Public login/sign-up/find-doctor/specialty flows are not used.

## Appointment flow

Website `/appointment`
→ `POST /api/appointments`
→ Spring Boot validation
→ PostgreSQL `appointments`
→ confirmation/reference number.

Clinic owner visits `/admin/appointments`
→ enters admin credentials
→ sees appointment requests
→ `Export Excel` downloads `arch-and-sole-appointments.xlsx`.

## Local option A — easiest with Docker

Prerequisites: Docker Desktop, Node.js/npm.

From this root folder:

```powershell
docker compose up --build
```

Backend: `http://localhost:8080`

In another terminal:

```powershell
cd Arch_and_Sole_React
Copy-Item .env.example .env
npm install
npm run dev
```

Frontend: `http://localhost:5173`

Local admin defaults from `docker-compose.yml`:

- username: `admin`
- password: `change-this-local-password`

Change these before any public deployment.

## Local option B — PostgreSQL installed on Windows

Create database `arch_and_sole`, then set environment variables before starting backend:

```powershell
$env:DATABASE_URL="jdbc:postgresql://localhost:5432/arch_and_sole"
$env:DATABASE_USERNAME="postgres"
$env:DATABASE_PASSWORD="YOUR_POSTGRES_PASSWORD"
$env:ADMIN_USERNAME="admin"
$env:ADMIN_PASSWORD="USE_A_STRONG_PASSWORD"
$env:CORS_ALLOWED_ORIGINS="http://localhost:5173"

cd arch-and-sole-backend
mvn spring-boot:run
```

Then start the React frontend as shown above.

## Main API

### Create an appointment

`POST /api/appointments`

```json
{
  "fullName": "Patient Name",
  "phone": "+91 9000000000",
  "email": "patient@example.com",
  "service": "Foot Analysis",
  "preferredDate": "2026-10-10",
  "preferredTime": "11:30",
  "message": "Heel pain"
}
```

### Admin list

`GET /api/admin/appointments` — HTTP Basic authentication required.

### Excel export

`GET /api/admin/appointments/export` — HTTP Basic authentication required.

## Deployment architecture

Use three deployed resources:

1. React frontend — any static Vite-compatible host.
2. Spring Boot backend — any Java/Docker host.
3. Managed PostgreSQL database.

### Frontend environment

Set:

```text
VITE_API_BASE_URL=https://YOUR-BACKEND-DOMAIN
```

Build command: `npm run build`
Output directory: `dist`

`vercel.json` is included so React Router routes resolve correctly on Vercel-style static hosting.

### Backend environment

Set these secrets/variables on the backend host:

```text
DATABASE_URL=jdbc:postgresql://DB_HOST:5432/DB_NAME
DATABASE_USERNAME=...
DATABASE_PASSWORD=...
ADMIN_USERNAME=...
ADMIN_PASSWORD=USE_A_LONG_RANDOM_PASSWORD
CORS_ALLOWED_ORIGINS=https://YOUR-FRONTEND-DOMAIN
```

The included `Dockerfile` can deploy the Spring Boot service to any Docker-capable platform.

## Production notes

- Do not use the example admin password in production.
- Keep database credentials and admin credentials only in deployment environment variables.
- Use HTTPS for frontend and backend.
- Take automated PostgreSQL backups on your hosting provider.
- The appointment form is a request form. It records the patient's preferred date/time; it does not claim that a particular doctor or slot has been confirmed.
- Before collecting real patient data publicly, add your final privacy policy/consent wording appropriate for your clinic and jurisdiction.

## Updating doctors and staff later

Edit:

`Arch_and_Sole_React/src/data/team.js`

There are exactly 3 doctor objects and 2 staff objects ready for names, roles, qualifications, specializations and image paths.


## CORRECTED LOCAL PORTS

- React: http://localhost:5173
- Arch & Sole backend: http://localhost:8081
- Arch & Sole PostgreSQL host port: 5433 (container port remains 5432)
- Existing STS application can continue using 8080.

The Home page no longer repeats the service-card section. Services remain available on the dedicated Services page. The Team page shows the three supplied doctors directly; staff placeholders remain hidden until real staff names/photos are added.
