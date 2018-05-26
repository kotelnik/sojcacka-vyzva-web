INSERT INTO ChallengeStatus (id, name) VALUES (1, 'unassigned');
INSERT INTO ChallengeStatus (id, name) VALUES (2, 'started');
INSERT INTO ChallengeStatus (id, name) VALUES (3, 'finished');

INSERT INTO ChallengeFinishStatus (id, name) VALUES (1, 'passed');
INSERT INTO ChallengeFinishStatus (id, name) VALUES (2, 'failed');

INSERT INTO ChallengeDifficulty (id, name) VALUES (1, 'easy');
INSERT INTO ChallengeDifficulty (id, name) VALUES (2, 'moderate');
INSERT INTO ChallengeDifficulty (id, name) VALUES (3, 'hard');
INSERT INTO ChallengeDifficulty (id, name) VALUES (4, 'die_hard');

INSERT INTO Person (nickName, lidiId) VALUES ('Krolík', 1);
INSERT INTO Person (nickName, lidiId) VALUES ('Kotelník', 2);
INSERT INTO Person (nickName, lidiId) VALUES ('Petříček', 3);
INSERT INTO Person (nickName, lidiId) VALUES ('Koďála', 5);
INSERT INTO Person (nickName, lidiId) VALUES ('Kašna', 6);
INSERT INTO Person (nickName, lidiId) VALUES ('Sojka', 9);
INSERT INTO Person (nickName, lidiId) VALUES ('Lucka', 10);
INSERT INTO Person (nickName, lidiId) VALUES ('Lenka', 11);
INSERT INTO Person (nickName, lidiId) VALUES ('Pavel', 16);
INSERT INTO Person (nickName, lidiId) VALUES ('Johanka', 18);
INSERT INTO Person (nickName, lidiId) VALUES ('Filip', 19);
INSERT INTO Person (nickName, lidiId) VALUES ('MIKI', 20);

INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (2, 1, 'Pošli dopis', 'popis', now(), now(), 1, 500, 3600, 1);
INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (1, 2, 'Běhej', 'každý den do práce', now(), now(), 1, 500, 3600, 1);
INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (1, NULL, 'Hraj na počítači', 'každý večer', now(), now(), 1, 500, 3600, 4);
INSERT INTO Challenge (creatorId, executerId, title, description, created, started, statusId, score, durationSec, difficultyId) VALUES (1, NULL, 'Další', 'každý večer', now(), now(), 1, 500, 3600, 3);
