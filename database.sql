drop table if exists user;
CREATE TABLE user (
  user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50),
  last_upd_ts TIMESTAMP
);

drop table if exists ngram;
CREATE TABLE ngram (
  ngram_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50),
  last_upd_ts TIMESTAMP
);

drop table if exists league;
CREATE TABLE league (
  league_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  league_name VARCHAR(50),
  last_upd_ts TIMESTAMP
);

drop table if exists user_ngram;
CREATE TABLE user_ngram (
  user_ngram_id INT(6)  UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT(6) NOT NULL REFERENCES user(user_id),
  league_id INT(6) NOT NULL REFERENCES league(league_id),
  ngram_id INT(6) NOT NULL REFERENCES ngram(ngram_id),
  score INT(6) NOT NULL,
  last_upd_ts TIMESTAMP
);



