import java.io.*;
import java.net.*;

public class CadenaFrioAPI {

    public static void main(String[] args) throws Exception {

        int port;

        if (System.getenv("PORT") != null) {
            port = Integer.parseInt(System.getenv("PORT"));
        } else {
            port = 8081; 
        }

        ServerSocket serverSocket = new ServerSocket(port);

        while (true) {
            Socket socket = serverSocket.accept();

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            OutputStream out = socket.getOutputStream();

            String request = in.readLine();

            String respuesta = "Producto no registrado";

            if (request != null && request.contains("vacunas")) {
                respuesta = "Temperatura OK (2°C - 8°C)";
            } else if (request != null && request.contains("carne")) {
                respuesta = "Temperatura en riesgo (10°C)";
            }

            String httpResponse = "HTTP/1.1 200 OK\r\n" + "Access-Control-Allow-Origin: *\r\n" + "Content-Type: text/plain\r\n\r\n" + respuesta;
            out.write(httpResponse.getBytes());
            out.close();
            socket.close();
        }
    }
}