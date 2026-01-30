# Testēšanas stratēģija (4.1 diena)

## Mērķis
Nodrošināt, ka backend API darbojas korekti dažādos ievades scenārijos, atgriež pareizus statusa kodus un kļūdu formātu, kā arī ir stabils pret biežākajām kļūdām (tukšs body, nepareizi parametri, dublikāti u.c.).

---

## Testu veidi (ar piemēriem)

### Unit testi (vienību testi)
- Testē atsevišķas funkcijas izolēti (bez DB un bez HTTP).
- Piemērs: validateUser() — pārbauda vārdu/e-pastu/paroli un atgriež kļūdas.

### Integration testi (integrācijas testi)
- Testē vairāku komponentu kopīgu darbību (piem., API maršruts + serviss + DB slānis).
- Piemērs: POST /users → validācija → DB INSERT → atbilde ar 201 vai kļūdu.

### Funkcionālie testi (functional)
- Testē sistēmas funkcionalitāti no lietotāja/patērētāja skata.
- Piemērs: reģistrācija ar derīgiem datiem, pēc tam GET /users un pārbaude, ka lietotājs ir sarakstā.

### End-to-End (E2E)
- Testē pilnu plūsmu no UI līdz backend un DB (ja ir front-end).
- Šajā projektā E2E var tikt veikts minimāli (piem., ar vienkāršu HTML formu vai Postman kolekciju kā pilnu scenāriju).

---

## Rīki un pieeja projektā
- **Jest**: unit testi (validācijas, util funkcijas, servisu loģika ar mokiem).
- **Supertest**: integrācijas testi API maršrutiem (GET/POST /users u.c.).
- **Postman**: manuālā testēšana un demonstrācijas scenāriji (kolekcija docs/).

---

## Pārklājuma mērķis (coverage)
- Unit testiem: mērķis vismaz ~70% galvenajai loģikai (validācija + servisi).
- Integrācijas testiem: galvenie maršruti ar pozitīvajiem un negatīvajiem scenārijiem.
- Prioritāte: kļūdu gadījumi (VALIDATION_ERROR, DUPLICATE, NOT_FOUND, DB_ERROR).

---

## Ko testēsim vispirms (prioritātes)
1. Validācija (User, Post, Log) — visbiežākie ievades robežgadījumi.
2. /users API (GET/POST) — statusa kodi, atbildes struktūra, kļūdu formāts.
3. DB slānis ar mokiem (lai netērētu reālos datus).
4. Pārējie maršruti (posts/logs), kad tie būs pieejami.
