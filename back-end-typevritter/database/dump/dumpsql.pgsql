create database webxrrva;
\c webxrrva;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    password text NOT NULL,
    createdAt TIMESTAMP Default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS statuses(
    id SERIAL PRIMARY KEY,
    status_sender integer NOT NULL  REFERENCES  users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    Content text NOT NULL,
    createdAt TIMESTAMP Default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS conversations(
    id SERIAL PRIMARY KEY,
    user_1 integer NOT NULL REFERENCES  users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    user_2 integer NOT NULL REFERENCES  users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    createdAt TIMESTAMP Default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS chats(
    id SERIAL PRIMARY KEY,
    Content text NOT NULL,
    user_sender integer NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    conversation integer NOT NULL REFERENCES  Conversations(id) ON DELETE CASCADE ON UPDATE CASCADE,
    createdAt TIMESTAMP Default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS follows(
    id SERIAL PRIMARY KEY,
    following_user integer NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    to_follow_user integer NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    createdAt TIMESTAMP Default CURRENT_TIMESTAMP
);
