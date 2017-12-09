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
        "creator": {
            "firstName": "Pepa",
            "lastName": "Chytrej",
            "nickName": "Chytrák",
            "scoreChallenges": 3000,
        },
        "executer": {
            "firstName": "Karel",
            "lastName": "Mladej",
            "nickName": "Mládenec",
            "scoreChallenges": 50,
        },
        "title": "Pošli dopis",
        "description": "popis",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "status": {
            "id": 2,
            "name": "started"
        },
        "score": 500,
        "durationSec": 3600,
        "difficulty": {
            "id": 1,
            "name": "easy"
        },
        "dueTime": "2017-12-08 21:58:09"
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
        "scoreChallenges": 4050,
        "hasChallenge": true
    },
    {
        "id": 124,
        "firstName": null,
        "lastName": null,
        "nickName": "Sojka",
        "scoreChallenges": 340,
        "hasChallenge": false
    }
]
```

* firstName, lastName mohou být null

### Challenge

#### Výpis mnou dokončených výzev

```GET /vyzvy/api.php?path=/acceptedChallenges```

Response: viz sekce Vyhledávání výzev

#### Výpis mnou vytvořených výzev

```GET /vyzvy/api.php?path=/createdChallenges```

Response: viz sekce Vyhledávání výzev


#### Vyhledávání výzev
```http
GET /vyzvy/api.php?path=/search
  &executerId={executerId}
  &creatorId={creatorId}
  &statusId={statusId}
  &score={score}
  &difficultyId={difficultyId}
  &durationSec={durationSec}
  &orderBy={executerId|difficultyId|score|durationSec|creatorId|created|started|finished|id}
  &ordering={asc|desc}
  &statusIdGreater=true
  &scoreGreater=true
  &difficultyIdGreater=true
  &durationSecGreater=true
```

Response:
```json
[
    {
        "id": 2,
        "creator": {
            "firstName": "Pepa",
            "lastName": "Chytrej",
            "nickName": "Chytrák",
            "scoreChallenges": 3000,
        },
        "executer": {
            "firstName": "Karel",
            "lastName": "Mladej",
            "nickName": "Mládenec",
            "scoreChallenges": 50,
        },
        "title": "Pošli dopis",
        "description": "popis",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "status": {
            "id": 2,
            "name": "started"
        },
        "score": 500,
        "durationSec": 3600,
        "difficulty": {
            "id": 1,
            "name": "easy"
        },
        "dueTime": "2017-12-08 21:58:09"
    },
    {
        "id": 1,
        "creator": {
            "firstName": "Pepa",
            "lastName": "Chytrej",
            "nickName": "Chytrák",
            "scoreChallenges": 3000,
        },
        "executer": {
            "firstName": "Karel",
            "lastName": "Mladej",
            "nickName": "Mládenec",
            "scoreChallenges": 50,
        },
        "title": "Pošli dopis2",
        "description": "popis2",
        "created": "2017-12-07 21:58:09",
        "started": "2017-12-07 21:58:09",
        "finished": null,
        "status": {
            "id": 2,
            "name": "started"
        },
        "score": 500,
        "durationSec": 3600,
        "difficulty": {
            "id": 1,
            "name": "easy"
        },
        "dueTime": "2017-12-08 21:58:09"
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
    "score": 500,
    "durationSec": 3600,
    "difficultyId": 1
}
```

* všechna pole jsou povinná

Response (JSON):
```json
{
    "id": 123,
    "creator": {
        "firstName": "Pepa",
        "lastName": "Chytrej",
        "nickName": "Chytrák",
        "scoreChallenges": 3000,
    },
    "executer": null,
    "title": "Pošli dopis2",
    "description": "popis2",
    "created": "2017-12-07 21:58:09",
    "started": null,
    "finished": null,
    "status": {
        "id": 1,
        "name": "unassigned"
    },
    "score": 500,
    "durationSec": 3600,
    "difficulty": {
        "id": 1,
        "name": "easy"
    }
}
```

### Update výzvy

```POST /vyzvy/api.php?path=/updateChallenge```

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
    "difficultyId": 1
}
```

Response: http status 200

* jen pole "id" je povinné, ostatní jsou volitelná
* pokud nějaké pole nepřijde (undefined), nezmění se v databázi
* pokud přijde u nějakého pole null, nastaví se mu v databází hodnota NULL, pokud to dává smysl (např. datumy)

### Accept Challenge

```POST /vyzvy/api.php?path=/acceptChallenge```

Request Body (JSON):
```json
{
    "difficultyId": 2
}
```

* difficultyId je nepovinné

Response (JSON):
```json
{
    "id": 123,
    "creator": {
        "firstName": "Pepa",
        "lastName": "Chytrej",
        "nickName": "Chytrák",
        "scoreChallenges": 3000,
    },
    "executer": {
        "firstName": "Kája",
        "lastName": "Chytrej",
        "nickName": "Chytrák",
        "scoreChallenges": 3000,
    },
    "title": "Pošli dopis2",
    "description": "popis2",
    "created": "2017-12-07 21:58:09",
    "started": "2017-12-09 21:58:09",
    "finished": null,
    "status": {
        "id": 2,
        "name": "started"
    },
    "score": 500,
    "durationSec": 3600,
    "difficulty": {
        "id": 1,
        "name": "easy"
    },
    "dueTime": "2017-12-10 21:58:09"
}
```


### Enums

#### ChallengeStatus

```GET /vyzvy/api.php?path=/challengeStatuses```

Response Body (JSON):
```json
[
    {
        "id": 1,
        "name": "unassigned"
    },
    {
        "id": 2,
        "name": "started"
    },
    {
        "id": 3,
        "name": "finished"
    }
]
```

#### ChallengeDifficulties

```GET /vyzvy/api.php?path=/challengeDifficulties```

Response Body (JSON):
```json
[
  {
    "id": 1,
    "name": "easy"
  },
  {
    "id": 2,
    "name": "moderate"
  },
  {
    "id": 3,
    "name": "hard"
  },
  {
    "id": 4,
    "name": "die_hard"
  }
]
```
