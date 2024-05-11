-- create 'users' table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- add data into 'users' collection
INSERT INTO
    users (name, email)
VALUES
    ('Bob', 'bob@test.com'),
    ('Nicky', 'nicky@test.com'),
    ('Tom', 'tom@test.com'),
    ('Alice', 'alice@test.com'),
    ('Martin', 'martin@test.com');