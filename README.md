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
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=prakse


## Palaišana (development)
npm run dev

Vai alternatīvi:
node src/server.js

## Pārbaude
Atver pārlūkā:
http://localhost:3000/health

Sagaidāmais rezultāts:
{ "status": "ok" }
## API galapunkti

### GET /health
Atgriež servera statusu.

### POST /users
Izveido jaunu lietotāju ar validāciju un paroles hešošanu.

### GET /users
Atgriež lietotāju sarakstu bez parolēm.

Atbalsta:
- filtrēšanu pēc e-pasta (?email=)
- pagināciju (?page=&limit=)


## Projekta struktūra
intern_project/
├ src/
│ ├ routes/
│ │  └ users.js
│ ├ db/
│ │  └ db.js          
│ ├ middleware/
│ ├ utils/
│ │  ├ validateUser.js 
│ │  ├ httpError.js
│ └ server.js
│
├ db/
│ ├ schema.sql        
│ └ seed.sql          
│
├ tests/
│ ├ validateUser.test.js
│ └ users.api.test.js
│
├ docs/
│ ├ testing_report.md
│ ├ intern_project.postman_collection.json
│ ├ summary.md
├ README.md
├ package.json
└  package-lock.json

