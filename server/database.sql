CREATE DATABASE swapsies;

CREATE TABLE games(
  game_id SERIAL PRIMARY KEY,
  console VARCHAR(255),
  description TEXT,
  cover_image TEXT,
  rating FLOAT(5),
  release_date DATE
)