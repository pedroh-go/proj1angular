FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . .

RUN chmod +x mvnw

RUN ./mvnw clean install -DskipTests

CMD ["java", "-jar", "target/proj1angular-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080
