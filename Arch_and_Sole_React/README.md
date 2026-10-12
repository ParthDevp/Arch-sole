# Arch & Sole Premium React Website

This project is a premium React/Vite rebuild of the existing Arch & Sole frontend. The original project contained only a React frontend with static services/team placeholders and a frontend-only appointment request. It did **not** contain a backend, database, authentication server, doctor availability API, or real appointment API.

## What was preserved
- Existing React/Vite architecture and Bootstrap setup
- Existing routes: `/`, `/about`, `/podiatry`, `/services`, `/team`, `/appointment`, `/contact`
- Existing clinic logo, hero image and service banner
- Existing Arch & Sole clinic content and service information

## New premium routes
- `/doctors`
- `/specialties`
- `/doctor/:doctorId`
- `/book-appointment/:doctorId`
- `/appointments`
- `/appointments/:appointmentId`
- `/appointments/:appointmentId/reschedule`
- `/login`
- `/register`
- `/profile`

The old `/appointment` route is preserved and safely redirects to the doctor directory instead of using fake frontend booking logic.

## Backend integration
Copy `.env.example` to `.env` and set your backend URL:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

The frontend expects an API abstraction that can be adapted without rewriting pages. Current service modules are in `src/services/`.

Expected endpoint families (adapt these modules to your real backend contract):
- `GET /api/doctors`
- `GET /api/doctors/:id`
- `GET /api/specialties`
- `GET /api/locations`
- `GET /api/doctors/:id/availability`
- `GET /api/doctors/:id/slots?date=YYYY-MM-DD`
- `POST /api/appointments`
- `POST /api/appointments/verify-slot`
- `GET /api/appointments`
- `POST /api/appointments/:id/cancel`
- `POST /api/appointments/:id/reschedule`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/me`
- `GET/PUT /api/profile`

These are isolated in service files so you can change endpoint names/payloads to match your actual backend without touching UI components.

## Important booking rule
The frontend never treats displayed availability as authoritative. The backend must validate doctor, schedule, leave, conflicting appointments, ownership and authentication transactionally before creating/rescheduling an appointment. Return HTTP `409` when a slot has just been taken; the UI handles that case and asks the user to choose another slot.

## Run
```bash
npm install
npm run dev
```

## Production notes
- Replace placeholder legal pages with clinic-approved Privacy/Terms text.
- Connect real backend APIs before production.
- Configure CORS/auth cookies or bearer tokens correctly.
- Use server-side transactional locking/unique constraints to prevent double booking.
- Keep clinic time handling consistent with `Asia/Kolkata` unless your backend specifies otherwise.
