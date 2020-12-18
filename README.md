# A guide for public transportation in France

We focused in our project on getting all the data for public transportation (Trains, Trams, Buses, Bicycles, etc) and encompass them all in one triple store. Our project consists of three main parts :

## PART ONE : DATA INGESTION
In the first part, we parsed data from different CSV files (SNCF and STAS) and persisted them in our dataset. In order to run and test our project, you should do the same.

* Download the folder **projectAPI-1**
* Download the [Spring Tool Suite](https://spring.io/tools)
* Import the project in Spring Tool Suite
* Download the dependencies that are present in the pom.xml file
* Don't forget to start your fuseki server
* Create a graph in jena called **data**
* Run the main in the **getData** java file in **com.semweb.dataIngestion** package.

## PART TWO : CREATING THE API
For us to exploit our persisted data, we created an api using spring framework. To start the api, you should run the class **ProjectApi1Application** as a spring boot application. Then test the api using Postman. Here are the GET requests we implemented :

* http://localhost:8080/api/stations
* http://localhost:8080/api/trains
* http://localhost:8080/api/trams
* http://localhost:8080/api/buses

## PART THREE : TACKLING THE FRONT-END
The last part is to communicate with our api using HTTP GET Requests and display the data in a web app. To test our front-end part, follow these steps :

* Download the **react-api** folder
* run `npm i`
* run `npm install @material-ui/core`
* run `npm install @material-ui/icons`
* run `npm start`
* go to <http://localhost:3000/>