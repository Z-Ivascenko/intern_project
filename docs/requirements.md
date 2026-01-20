# Projekta prasības (3.1 diena) – Requirements & User Stories

## Projekta mērķis
Izveidot vienkāršu tīmekļa lietotni ar lietotāju reģistrāciju/ielogošanos, ziņu (posts) pievienošanu un “logu” (notifikāciju/žurnāla) sistēmu. Lietotāji var publicēt ziņas un skatīt tās, administrators var pārvaldīt saturu un lietotājus.

---

## Galvenās funkcijas (prasību saraksts)
1. Lietotāju reģistrācija (signup)
2. Lietotāju ielogošanās (login) un atslēgšanās (logout)
3. Lietotāja profila skatīšana / pamata dati
4. Ziņu (posts) izveide, skatīšana, rediģēšana, dzēšana (CRUD)
5. Ziņu saraksts ar filtrēšanu/pagināciju (minimālā līmenī)
6. “Logu sistēma” (notifikācijas vai darbību žurnāls):
   - sistēma saglabā svarīgus notikumus (piem., lietotājs izveidoja ziņu)
   - lietotājs var skatīt savus “logus”
7. Administrators:
   - lietotāju saraksts / bloķēšana (minimāli)
   - ziņu moderēšana (dzēst / paslēpt)

---

## Lietotāja stāsti (User stories)
### Autentifikācija
- Kā lietotājs es vēlos reģistrēties sistēmā, lai varētu izveidot savu kontu.
- Kā lietotājs es vēlos ielogoties, lai piekļūtu savām funkcijām.
- Kā lietotājs es vēlos izlogoties, lai aizsargātu savu kontu.

### Ziņas (Posts)
- Kā lietotājs es vēlos pievienot jaunu ziņu, lai dalītos ar informāciju.
- Kā lietotājs es vēlos redzēt ziņu sarakstu, lai pārlūkotu saturu.
- Kā lietotājs es vēlos redzēt vienas ziņas detaļas, lai izlasītu pilnu saturu.
- Kā lietotājs es vēlos rediģēt savu ziņu, lai labotu kļūdas vai atjauninātu informāciju.
- Kā lietotājs es vēlos dzēst savu ziņu, lai noņemtu nevajadzīgu saturu.

### Logu sistēma (notifikācijas / žurnāls)
- Kā lietotājs es vēlos redzēt savus “logus” (notifikācijas/žurnālu), lai saprastu, kas ir noticis sistēmā.
- Kā lietotājs es vēlos, lai sistēma automātiski pievieno ierakstu “logā”, kad es izveidoju/rediģēju/dzēšu ziņu.

### Administrators
- Kā administrators es vēlos redzēt lietotāju sarakstu, lai pārvaldītu sistēmas lietotājus.
- Kā administrators es vēlos bloķēt vai atbloķēt lietotāju, lai novērstu ļaunprātīgu izmantošanu.
- Kā administrators es vēlos dzēst vai paslēpt neatbilstošas ziņas, lai uzturētu kārtību sistēmā.

---

## Use case saraksts (aktori un darbības)
### Aktori
- Lietotājs (User)
- Administrators (Admin)

### Use cases – Lietotājs
1. Reģistrēties
2. Ielogoties / Izlogoties
3. Skatīt profilu
4. Skatīt ziņu sarakstu
5. Skatīt ziņas detaļas
6. Izveidot ziņu
7. Rediģēt savu ziņu
8. Dzēst savu ziņu
9. Skatīt “logus” (notifikācijas/žurnālu)

### Use cases – Administrators
1. Skatīt lietotāju sarakstu
2. Bloķēt/atbloķēt lietotāju
3. Moderēt ziņas (dzēst/paslēpt)

---

## Papildu piezīmes (minimālā validācija un kļūdu formāts)
- Reģistrācija: vārds >= 2 simboli, e-pasts derīgs, parole >= 6 simboli.
- Ziņa: virsraksts/nav obligāts (pēc izvēles), saturs nav tukšs.
- Kļūdu formāts API (vienots):
  { "error": { "code": "CODE", "message": "message" } }
