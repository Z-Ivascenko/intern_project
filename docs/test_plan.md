# Testu plāns (4.1 diena)

Tabula satur galvenās funkcijas, testa gadījumus, sagaidāmo rezultātu un atbildīgo personu.

| Funkcija | Testa gadījums | Sagaidāmais rezultāts | Atbildīgais |
|---|---|---|---|
| Reģistrācija (POST /users) | Derīgi dati | 201, atgriež {id, name, email} | Praktikants |
| Reģistrācija (POST /users) | Tukšs body | 400, error.code=VALIDATION_ERROR vai EMPTY_BODY | Praktikants |
| Reģistrācija (POST /users) | Vārds īsāks par 2 | 400, error.code=VALIDATION_ERROR | Praktikants |
| Reģistrācija (POST /users) | Nederīgs e-pasts (bez @) | 400, error.code=VALIDATION_ERROR | Praktikants |
| Reģistrācija (POST /users) | Parole īsāka par 6 | 400, error.code=VALIDATION_ERROR | Praktikants |
| Reģistrācija (POST /users) | Dublikāts e-pastam | 400, error.code=DUPLICATE | Praktikants |
| Lietotāji (GET /users) | Bez parametriem | 200, saraksts bez parolēm | Praktikants |
| Lietotāji (GET /users) | Filtrs ?email= | 200, atgriež filtrētu rezultātu | Praktikants |
| Lietotāji (GET /users) | Paginācija ?page=1&limit=10 | 200, korekts limit/offset | Praktikants |
| Lietotāji (GET /users) | Nederīgs page (0 vai teksts) | 400, error.code=INVALID_PAGE | Praktikants |
| Lietotāji (GET /users) | Nederīgs limit (0 vai >100) | 400, error.code=INVALID_LIMIT | Praktikants |
| Kļūdu formāts | Iekšēja kļūda (simulēta) | 500, { error: { code, message } } | Praktikants |
