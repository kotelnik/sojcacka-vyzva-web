# sojcacka-vyzva-web
PHP web pro Sojčáky a jejich upragradovanou verzi akce "posílání dopisů"

## API

Základní rozdělení je zatím dle tabulek v databázi (Person, Challenge, ...)

### Person

API související s tabulkou Person (tedy uživatelem).

#### Current User

```GET /vyzvy/api.php?path=/currentUser```

Response (example):
```json
{
    "id": 123,
    "firstName": "Jára",
    "lastName": "Cimrman",
    "nickName": "Jelcin",
    "scoreChallenges": 4050,
    "currentChallenge": {
        "id": 2,
        "creatorId": 2,
        "executerId": 1,
        "title": "Pošli dopis",
        "description": "popis",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "statusId": 2,
        "score": "500",
        "durationSec": 3600,
        "difficultyId": 1,
        "timeToFinishSec": 2195
    }
}
```

* currentChallenge, firstName, lastName mohou být null

#### All Users

```GET /vyzvy/api.php?path=/user/list```

Response (example):
```json
[
    {
        "id": 123,
        "firstName": "Jára",
        "lastName": "Cimrman",
        "nickName": "Jelcin",
        "scoreChallenges": 4050
    },
    {
        "id": 124,
        "firstName": null,
        "lastName": null,
        "nickName": "Sojka",
        "scoreChallenges": 340
    }
]
```

* firstName, lastName mohou být null

### Seznam výzev

### Vyhledávání výzev
```http
GET /vyzvy/api.php?path=/search
  &executerId={executerId}
  &creatorId={creatorId}
  &score={score}
  &difficultyId={difficultyId}
  &durationSec={durationSec}
  &orderBy={executerId|difficultyId|score|durationSec|creatorId|created|started|finished|id}
  &ordering={asc|desc}
  &scoreGreater=true
  &difficultyIdGreater=true
  &durationSecGreater=true
```

Response:
```json
[
    {
        "id": 2,
        "creatorId": 2,
        "executerId": 1,
        "title": "Pošli dopis",
        "description": "popis",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "statusId": 2,
        "score": "500",
        "durationSec": 3600,
        "difficultyId": 1,
        "timeToFinishSec": 2195
    },
    {
        "id": 1,
        "creatorId": 1,
        "executerId": 2,
        "title": "Pošli dopis2",
        "description": "popis2",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "statusId": 2,
        "score": "500",
        "durationSec": 3600,
        "difficultyId": 1,
        "timeToFinishSec": 2195
    }
]
```

* všechny parametry jsou nepovinné
* executerId - pokud je zadáno "null", vrátí všechny úkoly, kt. zrovna nikdo nevykonává
* creatorId - pokud je zadáno "null", z principu vrátí prázdný JSON array
* scoreGreater - true znamená, že se hledá jen zadané a vyšší score (false naopak)
* difficultyIdGreater - true znamená, že se hledá jen zadaná a vyšší obtížnost (false naopak)
* durationGreater - true znamená, že se hledá jen zadaná a vyšší doba trvání (false naopak)

### Vytvoření výzvy

```POST /vyzvy/api.php?path=/createChallenge```

Request Body (JSON):
```json
{
    "creatorId": 2,
    "title": "Pošli dopis",
    "description": "popis",
    "score": "500",
    "durationSec": 3600,
    "difficultyId": 1,
}
```

Response: http status 200

* všechna pole jsou povinná

### Update výzvy

```PUT /vyzvy/api.php?path=/updateChallenge```

Request Body (JSON):
```json
{
    "id": 1,
    "executerId": 2,
    "title": "Pošli dopis2",
    "description": "popis2",
    "started": "2017-12-07 21:58:09",
    "finished": null,
    "statusId": 2,
    "score": "500",
    "durationSec": 3600,
    "difficultyId": 1,
}
```

Response: http status 200

* jen pole "id" je povinné, ostatní jsou volitelná
* pokud nějaké pole nepřijde (undefined), nezmění se v databázi
* pokud přijde u nějakého pole null, nastaví se mu v databází hodnota NULL, pokud to dává smysl (např. datumy)
