CREATE TABLE reviews(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    body VARCHAR(6000) NOT NULL,
    rating INT check(rating >= 1 AND rating <=5)
);