DROP TABLE IF EXISTS Challenge;
DROP TABLE IF EXISTS Person;
DROP TABLE IF EXISTS ChallengeStatus;
DROP TABLE IF EXISTS ChallengeFinishStatus;
DROP TABLE IF EXISTS ChallengeDifficulty;

CREATE TABLE Person (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    nickName VARCHAR(50) NOT NULL,
    birthDate DATETIME,
    scoreChallenges DOUBLE NOT NULL DEFAULT 0,
    lidiId INT,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Challenge (
    id INT NOT NULL AUTO_INCREMENT,
    creatorId INT NOT NULL,
    executerId INT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    created DATETIME NOT NULL,
    started DATETIME,
    finished DATETIME,
    statusId INT NOT NULL,
    finishStatusId INT NULL,
    score DOUBLE NOT NULL,
    durationSec BIGINT NOT NULL,
    difficultyId INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE ChallengeStatus (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE ChallengeFinishStatus (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE ChallengeDifficulty (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE Challenge ADD CONSTRAINT FOREIGN KEY (creatorId) REFERENCES Person (id);
ALTER TABLE Challenge ADD CONSTRAINT FOREIGN KEY (executerId) REFERENCES Person (id);
ALTER TABLE Challenge ADD CONSTRAINT FOREIGN KEY (statusId) REFERENCES ChallengeStatus (id);
ALTER TABLE Challenge ADD CONSTRAINT FOREIGN KEY (finishStatusId) REFERENCES ChallengeFinishStatus (id);
ALTER TABLE Challenge ADD CONSTRAINT FOREIGN KEY (difficultyId) REFERENCES ChallengeDifficulty (id);
