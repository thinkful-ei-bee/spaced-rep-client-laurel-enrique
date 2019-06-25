# Spaced Repetition Capstone

## Authors

1. Enrique Montemayor
2. Laurel Butler

## Live Application Link: 

[Spaced Repeition](https://laurelbutler-spaced-rep.now.sh/)

## API Documentation:
[Spaced Repetition Server](https://github.com/thinkful-ei-bee/spaced-rep-server-laurel-enrique)

## Client Repo: 
[Spaced Repetition Client](https://github.com/thinkful-ei-bee/spaced-rep-client-laurel-enrique)

## Summary:

The app Enrique and I have created is a spaced repetition app designed for optimal learning of the spanish language. This application keeps track of the words you may have struggled with the most as well as the ones you have gotten correct. 

All you have to do is simply create an account and start learning!

## Setup

Clone or fork this repository and [the server repository](https://github.com/thinkful-ei-bee/EastCoast-Team-Project-Capstone3-Server). Run `npm install` on the client side and for the server you want to also run `npm install` in addition to creating the databases named rendezvous and rendezvous-test. You then want to create a .env file with the following information:

```PORT=8000
TZ='UTC'
MIGRATION_DB_HOST=127.0.0.1
MIGRATION_DB_PORT=5432
MIGRATION_DB_NAME=rendezvous
MIGRATION_DB_USER=(the username for your new database)
MIGRATION_DB_PASS=(password for your new database)
DB_URL="postgresql://(user):(password)@localhost/(database here)"
TEST_DB_URL="postgresql://(user):(password)@localhost/(test database here)"
JWT_SECRET="(whatever you want here)"
```

Now you will run `npm run migrate` to configure the database and `npm run migrate --NODE_ENV=test` to set up the test database. In the config.js file on the client side, you'll change the API_ENDPOINT to point to your local server. It by default is `http://localhost:3000`. You are good to go at this point and simply need to run `npm start` for the client and to start the nodemon, it's `npm run dev`.

## Technologies Used:

* React for the client
* Node.JS for the server
* Cypress for testing
* PostgreSQL for the database
