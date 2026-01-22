# Arhitektūra (3.2 diena)

## MVC un REST pamatprincipi
- MVC sadala sistēmu slāņos: Model (dati), Controller (pieprasījumu apstrāde), View (lietotāja saskarne).
- Šajā projektā fokusējamies uz backend daļu, tāpēc “View” tiek interpretēts kā UI skices dokumentācijā.
- REST izmanto resursus (piem., /users, /posts) un HTTP metodes (GET, POST, PUT/PATCH, DELETE).
- API atbildes tiek atgrieztas JSON formātā.
- Tiek izmantoti HTTP statusa kodi (200, 201, 400, 401, 404, 500).
- Kļūdu atgriešanai tiek izmantots vienots formāts: { "error": { "code": "...", "message": "..." } }.
- Slāņošana palīdz atdalīt atbildības un uzturēt kodu pārskatāmu (separation of concerns).

## Augsta līmeņa arhitektūra (moduļi)
- **Routes**: definē maršrutus un piesaista controller funkcijas.
- **Controllers**: nolasa req datus (params/body/query), izsauc servisu funkcijas, atgriež atbildi.
- **Services**: biznesa loģika (validācija, datu apstrāde, paroles hešošana).
- **DB (data access/repository)**: datu piekļuve un SQL vaicājumi.
- **Middleware**: kopīgas funkcijas (piem., validācija, autentifikācija, kļūdu apstrāde).

## Mapju struktūra (src/)
- `src/routes/` – API maršruti
- `src/controllers/` – pieprasījumu apstrādes slānis
- `src/services/` – biznesa loģika
- `src/models/` – datu modeļu skeleti
- `src/db/` – datu piekļuve un DB savienojums
- `src/middleware/` – vidējkārta (kopīgas funkcijas)
- `src/utils/` – palīgfunkcijas
- `src/server.js` – aplikācijas starts un maršrutu pieslēgšana
