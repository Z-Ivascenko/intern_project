# intern_project

Backend projekta pamata skelets ar Node.js un Express.

## Prasības
- Node.js
- npm

## Uzstādīšana
Instalē atkarības:
npm install

## Vides mainīgie (.env)
Izveido `.env` failu projekta saknē.

Piemērs:
PORT=3000
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

## Palaišana (development)
npm run dev

Vai alternatīvi:
node src/app.js

## Pārbaude
Atver pārlūkā:
http://localhost:3000/health

Sagaidāmais rezultāts:
{ "status": "ok" }

## Projekta struktūra
intern_project/
├─ src/
│  └─ app.js
├─ .env
├─ package.json
└─ README.md

