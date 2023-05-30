# Väderapplikation med React

Denna applikation är en enkel väderapplikation byggd med React. Den använder OpenWeatherMap API för att hämta och visa väderinformation för en specifik stad.

## Kom igång

För att köra applikationen lokalt, följ dessa steg:

1. Klona detta Git-repositorium till din dator.
2. Öppna ett terminalfönster och navigera till projektets rotmapp.
3. Installera projektets beroenden genom att köra kommandot `npm install`.
4. Skapa en fil med namnet `.env` i rotmappen och lägg till din OpenWeatherMap API-nyckel på följande sätt: `REACT_APP_API_KEY=YOUR_API_KEY`.
5. Starta applikationen genom att köra kommandot `npm start`.
6. Öppna webbläsaren och besök adressen [http://localhost:3000](http://localhost:3000).

## Användning

1. Ange namnet på en stad i inmatningsrutan.
2. Klicka på knappen "Get Weather" för att hämta väderdata för den angivna staden.
3. Temperaturen i Celsius och luftfuktigheten för den valda staden visas.

## Tekniker

- React
- Axios

## API

Denna applikation använder OpenWeatherMap API för att hämta väderdata. För att använda API:et behöver du registrera dig på OpenWeatherMap och få en API-nyckel. Du kan hitta mer information om API:et och registreringen på [OpenWeatherMap-webbplatsen](https://openweathermap.org/).
