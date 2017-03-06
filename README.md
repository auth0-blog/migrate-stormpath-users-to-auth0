# migrate-stormpath-users-to-auth0

## Building and Running Spring Boot Project

Our backend is a Spring Boot project that is located in the `backend` folder. To build it run the following commands:

```sh
cd backend

# this cleans all generated resources and build from scratch
# it also downloads all libraries that the project depends on
mvn clean package

# runs as a standalone Java app
java -jar target/migrate-stormpath-auth0-0.0.1-SNAPSHOT.jar --auth0.clientSecret=YOUR_SECRET_KEY 
```

Or you can run it with Spring Boot maven plugin:

```sh
mvn spring-boot:run -Drun.arguments="--auth0.clientSecret=YOUR_SECRET_KEY"
```
