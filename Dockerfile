FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY backend/CadenaFrioAPI.java .

RUN javac CadenaFrioAPI.java

CMD ["sh", "-c", "java CadenaFrioAPI"]