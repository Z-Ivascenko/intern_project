# API specifikācija (3.3 diena)

## Lietotāji (Users)

| Metode | Maršruts | Apraksts | Pieprasījums | Atbilde | Statusi |
|------|---------|---------|-------------|---------|---------|
| POST | /users | Izveido jaunu lietotāju | body: name, email, password | JSON ar user id | 201, 400 |
| GET | /users | Atgriež lietotāju sarakstu | query: page, limit, email | JSON masīvs | 200, 400 |
| GET | /users/:id | Atgriež vienu lietotāju | param: id | JSON objekts | 200, 404 |

---

## Ziņas (Posts)

| Metode | Maršruts | Apraksts | Pieprasījums | Atbilde | Statusi |
|------|---------|---------|-------------|---------|---------|
| POST | /posts | Izveido jaunu ziņu | body: title, content | JSON objekts | 201, 400 |
| GET | /posts | Atgriež ziņu sarakstu | query: page, limit | JSON masīvs | 200 |
| GET | /posts/:id | Atgriež vienu ziņu | param: id | JSON objekts | 200, 404 |
| DELETE | /posts/:id | Dzēš ziņu | param: id | Tukša atbilde | 204, 404 |

---

## Logi (Logs)

| Metode | Maršruts | Apraksts | Pieprasījums | Atbilde | Statusi |
|------|---------|---------|-------------|---------|---------|
| GET | /logs | Atgriež logu sarakstu | query: level | JSON masīvs | 200 |
