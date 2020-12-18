# A guide for public transportation in France

We focused in our project on getting all the data for public transportation (Trains, Trams, Buses, Bicycles, etc) and encompass them all in one triple store. Our project consists of three main parts :

## PART ONE : DATA INGESTION
In the first part, we parsed data from different CSV files (SNCF and STAS) and persisted them in our dataset. In order to run and test our project, you should do the same.

* Download the folder **projectAPI-1**
* Download the [Spring Tool Suite](https://spring.io/tools)
* Import the project in Spring Tool Suite
* Don't forget to start your fuseki server
* Create a graph in jena called **data**
* Run the main in the **getData** java file in **com.semweb.dataIngestion** package.

