INSERT INTO ChallengeStatus (id, name) VALUES (1, 'unassigned');
INSERT INTO ChallengeStatus (id, name) VALUES (2, 'started');
INSERT INTO ChallengeStatus (id, name) VALUES (3, 'finished');

INSERT INTO ChallengeDifficulty (id, name) VALUES (1, 'easy');
INSERT INTO ChallengeDifficulty (id, name) VALUES (2, 'moderate');
INSERT INTO ChallengeDifficulty (id, name) VALUES (3, 'hard');
INSERT INTO ChallengeDifficulty (id, name) VALUES (4, 'die_hard');

INSERT INTO Person (nickName, lidiId) VALUES ('Krolík', 1);
INSERT INTO Person (nickName, lidiId) VALUES ('Kotelník', 2);

--INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (2, 1, 'Pošli dopis', 'popis', now(), now(), 2, 500, 3600, 1);
--INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (1, 2, 'Běhej', 'každý den do práce', now(), now(), 2, 500, 3600, 1);
