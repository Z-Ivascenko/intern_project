# Code Review Guidelines

## Mērķis
Nodrošināt koda kvalitāti, drošību un vienotu stilu pirms apvienošanas `main`.

## Kad veidot Pull Request
- Kad funkcionalitāte ir pabeigta vai ir skaidrs starpposms.
- Kad testi iziet (`npm test`).
- Kad ir atjaunināta dokumentācija, ja tas ietekmē lietošanu.

## Ko pārbauda recenzents
- **Funkcionalitāte:** vai kods dara to, kas solīts PR aprakstā.
- **Stils un lasāmība:** saprotami nosaukumi, nav dublēta koda.
- **Drošība:** validācija, kļūdu apstrāde, sensitīvu datu neizdošana.
- **Testi:** vai ir testi svarīgākajiem scenārijiem.
- **Dokumentācija:** README/docs atjaunināti, ja nepieciešams.

## Kā sniegt atsauksmes
- Raksti konkrēti: ko mainīt un kāpēc.
- Ja tas ir sīkums: “nit: …”.
- Ja tas ir kritiski: “blocker: …”.

## PR pieņemšanas kritēriji
- PR ir saprotams, ar aprakstu un pārbaudes soļiem.
- Testi iziet.
- Nav zināmu kļūdu vai salauztu endpointu.
