# Twitter backend assignment

Node JS / Typescript

[Details Here](https://doc.clickup.com/36217304/d/h/12h8er-6276/8c27a92ca5382f8)

Postman: [Access Here](https://warped-meteor-555063.postman.co/workspace/da79fcec-29a5-4437-8661-c1a9b43ba827/documentation/19959569-aff6d16c-6064-490b-9453-8a2d34943035)

### Env setup

Replace `.env` file with mongo connection

```text
JWT_SECRET_KEY="THE WORLD IS BRIGHT"
MONGO_CONNECTION_URL="mongodb://127.0.0.1:27017/twitterDb"
```

### Perform below commands to set up dev env and run project.

```shell
yarn
yarn start:dev
```

### For production server run below command

```shell
yarn start
```

## Technologies Covered:

- NodeJs - To run server-side JavaScript engine.
- Express - NodeJs framework for routes managament.
- bcrypt - To encrypt password stored.
- Joi - For easy body validation
- Jsonwebtoken - For Api authentication
- Mongoose - Mongo db to store data.
- Typescript - To define a strict typing.
- Eslint - To follow style pattern, Airbnb is used.
- Prettier - To follow proper spacing, indentation etc.
- Husky - Used to perform some pre-commit actions
- Lint staged - This is used to perform actions on staged files.
