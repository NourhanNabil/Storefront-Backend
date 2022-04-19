# Storefront Backend Project



## Required Technologies
The application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Package installation
``
run -> npm install 
``
#### Dependencies
```sh
npm i express --- Node.js web app framework
npm i helmet --- Helmet helps you secure your Express apps by setting various HTTP headers
npm i pg --- PostgreSQL client
npm i bcrypt --- Password hashing
npm i dotenv --- Load environment variables
npm i jsonwebtoken --- JSON web tokens
```
#### Dev Dependencies
```sh
npm i --save-dev typescript --- typescript
npm i --save-dev eslint --- Linter
npm i --save-dev eslint-plugin-prettier --- Run prettier as an eslint rule
npm i --save-dev ts-node --- Typescript node.js
npm i --save-dev supertest --- HTTP testing
npm i --save-dev jasmine --- Jasmine unit testing
npm i --save-dev prettier --- Code formatting
npm i --save-dev eslint-config-prettier --- Disable conflicting eslint rules
npm i --save-dev jasmine-spec-reporter ---  Jasmine test output formatting
npm i --save-dev nodemon --- Monitor files & auto restart node
# Types for typescript support
npm -i --save-dev @types/bcrypt
npm -i --save-dev @types/express
npm -i --save-dev @types/jsonwebtoken
npm -i --save-dev @types/supertest
npm -i --save-dev @typescript-eslint/eslint-plugin
npm -i --save-dev @types/jasmine
npm -i --save-dev @types/pg
npm -i --save-dev @typescript-eslint/parser
```


## Scripts Used
```sh
build -> to compile TS files to JS files into dist Dir "npm run build"
start -> run the server "npm run start"
dev   -> nodemon package to run and refresh the server every time the code changed and saved "npm run dev"
lint  -> get any error with syntax stylish using eslint configurations "npm run lint"
lint:f -> fix all the error of syntax stylish "npm run lint:f"
prettier -> formate code stylish using prettier configurations "npm run prettier"
test -> only test the suites test with jasmine "npm run test"
```


###  Plan to Meet Requirements (Endpoints & Database Schema)

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

###  Database Creation

```sh
# create user
CREATE USER username WITH PASSWORD 'pass1234';

# create Database
CREATE DATABASE storefront; CREATE DATABASE storefront_test;

# grant all databases to the user
GRANT ALL PRIVILEGES ON DATABASE storefront TO username; GRANT ALL PRIVILEGES ON DATABASE storefront_test TO username;
```

### Database Migrations
```sh
# to create the same data schema run this command to create all tables 
db-migrate up
# to drop the data schema tables run this command to drop each table separately
db-migrate down
# to reset the data schema tables run this command
db-migrate reset
# Migrations used in this repo
db-migrate create add-users-table --sql-file
db-migrate create add-products-table --sql-file
db-migrate create add-orders-table --sql-file
db-migrate create add-orders-products-table --sql-file
```

### Environmental Variables (.env file contents)
```sh
# to connect with the database use the following environmental variables
  PORT ----- the server running on the port of 3000
  POSTGRES_HOST ----- the host (127.0.0.1)
  POSTGRES_DB ----- name of the database (storefront)
  POSTGRES_DB_TEST ----- name of the test database (storefront_test)
  POSTGRES_USER ----- the user name or the owner of the database(username)
  POSTGRES_PASSWORD ----- password of the database(pass1234)
  ENV ----- dev
  BCRYPT_PASSWORD ----- pepper text to hash the password(your-secret-password)
  SALT_ROUNDS ----- how many round for salting the password (10)
  TOKEN_SECRET ----- secret text for token (your-secret-token)

```
  


