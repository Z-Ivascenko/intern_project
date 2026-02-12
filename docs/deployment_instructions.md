# Izvietošanas instrukcija (Docker)

## Prasības
- Instalēts Docker Desktop

## 1) Uzbūvēt Docker attēlu

No projekta saknes mapes izpildi:

docker build -t intern_project .

## 2) Palaist konteineru

docker run --rm -p 3000:3000 --name intern_project intern_project

- `-p 3000:3000` nozīmē, ka konteinera ports 3000 tiek sasaistīts ar datora portu 3000.
- `--rm` automātiski izdzēš konteineru pēc tā apturēšanas.

## 3) Pārbaude

Atver pārlūkā:

http://localhost:3000/health

Sagaidāmais rezultāts:

{ "status": "ok" }

## Apturēšana

Lai apturētu konteineru, nospied `Ctrl + C` terminālī.
