# sojcacka-vyzva-web
PHP web pro Sojčáky a jejich upragradovanou verzi akce "posílání dopisů"

## API

Základní rozdělení je zatím dle tabulek v databázi (Person, Challenge, ...)

### Person

API související s tabulkou Person (tedy uživatelem).

#### Current User

GET /challenge/currentUser

Response (example):
```
{
    id: 123,
    firstName: "Jára",
    lastName: "Cimrman",
    nickName: "Jelcin",
    scoreChallenges: 4050,
    currentChallenge: {
        title: "Pošli dopis",
        timeToFinishSec: 3600
    }
}
```

* currentChallenge, firstName, lastName mohou být null

#### All Users

GET /challenge/user/list

Response (example):
```
[
    {
        id: 123,
        firstName: "Jára",
        lastName: "Cimrman",
        nickName: "Jelcin",
        scoreChallenges: 4050
    },
    {
        id: 123,
        firstName: "",
        lastName: "",
        nickName: "Sojka",
        scoreChallenges: 340
    }
]
```

* firstName, lastName mohou být null

### Seznam výzev

### Vyhledávání výzev dle vykonavatele (případně bez něj)
```
GET /challenge/search
  ?executerId={executerId}
  &difficultyId={difficultyId}
  &score={score}
  &duration={duration}
  &orderBy={difficultyId|score}
  &ordering={asc|desc}
  &scoreGreater=true
  &difficultyGreater=true
  &durationGreater=true
```

* všechny parametry jsou nepovinné
* executerId - pokud není zadán, vrátí všechny úkoly, kt. zrovna nikdo nevykonává
* scoreGreater - true znamená, že se hledá jen zadané a vyšší score (false naopak)
* difficultyGreater - true znamená, že se hledá jen zadaná a vyšší obtížnost (false naopak)
* difficultyGreater - true znamená, že se hledá jen zadaná a vyšší doba trvání (false naopak)

### Vyhledávání výzev dle zadavatele

GET /challenge/searchByCreator?creatorId={creatorId}

* parametr creatorId je povinný
* seznam je seřazený dle data created od nejnovějšího po nejstarší
* *vrací json s výzvami, kt. vytvořil Person se zadaným id*

