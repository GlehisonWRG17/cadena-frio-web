FROM openjdk:17-jdk-slim

WORKDIR /app

COPY backend/CadenaFrioAPI.java .

RUN javac CadenaFrioAPI.java

CMD ["sh", "-c", "java CadenaFrioAPI"]