# InterHealth




Welcome to the InterHealth project! Here, you will find a description and instructions on how to work with our project.

## Table of Contents

1. [Introduction](#introduction)
2. [Modules](#modules)
   - [MobileApp](#mobileapp)
   - [Country Choose](#country-choose)
   - [Medicine Search](#medicine-search)
   - [Medicine Package Recognition](#medicine-package-recognition)
   - [TCCC sped-up transfer](#tccc-sped-up-transfer)
   - [Chat Room](#chat-room)
   - [Checking Availability API](#checking-availability-api)
3. [Technologies Used](#technologies-used)
   
4. [Installation, Testing, and Running](#installation-testing-and-running)
   - [Installation](#installation)
   - [Testing](#testing)
   - [Running](#running)

# Introduction
 ### Today, military international medical missions are commonplace.
### In multinational military medical contexts, the ability to swiftly and precisely identify and prescribe pharmaceuticals is paramount. 
### Еhe multinational nature of military operations introduces complexities related to varying drug regulations, formularies, and cultural considerations, further emphasizing the need for standardized and efficient pharmaceutical practices.
### Thus, during the mission in other countries, medical doctors are not always able to use the drugs they are used to, and there is a need to use the drugs of the host country.
### In addition, in critical situations, doctors from different countries should exchange their available medicines that are used in their country. And the question of quickly finding analogues between doctors from different countries is critically important, because it can save the life of a serviceman.
### To solve the task, it is proposed to develop a mobile cross-platform application, with the possibility of working without a network in the conditions of hostilities, which would allow doctors to search for the most accurate analogues of drugs known to them in other countries.

# Modules
 ## MobileApp
   
   - Cross-platform
    -
    This application is cross-platform, meaning it can operate on iOS, Android, and the web.  It's built with [Ionic](https://ionicframework.com/), a framework that simplifies development and ensures a consistent user experience and access to native features on both iOS and Android devices.
   <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/main.png" alt="Підпис до зображення" width="200" height="450">
   <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/main1.png" alt="Підпис до зображення" width="200" height="450">
   <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/main2.png" alt="Підпис до зображення" width="200" height="450">
   

   - Standalone
    -
    The app works both offline and online. This is an advantage because it does not require internet access and allows the user to use all available functions. The Internet is only required when downloading databases with drugs that will be preloaded when selecting countries
      
   - User-Friendly Interface
    -
       The application has a user-friendly interface. All components are made in a laconic style and emphasized with icons for better understanding. The number of buttons has been reduced to use the "in a couple of clicks" functions, which will speed up the user's work with the application
     ###
     <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/card1.jpg" alt="Підпис до зображення" width="300" height="300">
          <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/card2.jpg" alt="Підпис до зображення" width="300" height="300">
               <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/card3.jpg" alt="Підпис до зображення" width="300" height="300">

## Country Choose
   
   - Only the necessary databases
    -
    The database of medicines will be downloaded only for the countries selected by the user. This will not overload the application, and will simplify the search and optimize the work. If the user changes the country of residence or the country in which he or she will work, the database for these countries will be loaded.
###
   <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/country.png" alt="Підпис до зображення" width="300" height="550">

## Medicine Search

   - Search for a drug by its original name
    -
       The search for medication will be conducted in the language specific to the drug. Therefore, users should enter the name of a drug in Ukraine without transliteration, and they will receive the names of equivalent medicines in France, which will be labelled with their original names in that country.
     ###
     
   <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/search.png" alt="Підпис до зображення" width="200" height="450">
      <img src="https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/searchTrue.png" alt="Підпис до зображення" width="200" height="450">

   - Unique identifier
    -
      Each drug is coded with a unique identifier. This identifier consists of: ATC, route of administration, NDC, form of issue and chemical structure.

      Taking these parameters into account allows you to search more accurately.

      Example:
         
         C01EB16/OU_1_1_1/54473-308-50/ST/C13H18O2 - is ibuprofen
        
      
         C01EB16 - ATC
      
         OU_1_1_1 - Route of administration
      
         54473-308-50 - NDC
      
         ST - Form of issue
      
         C13H1802 - Chemical structure
      
    
   - Mathematical Model of Search Optimization
    -
      (in progress)

## Medicine Package Recognition 
   - Recognition of the name of the medicine by Tesseract
    -
    Thanks to artificial intelligence, a user can take a picture of an unknown package of a medicine and find out its name. Artificial intelligence recognizes the name of the drug and then opens the drug search page

## TCCC sped-up transfer
   - Share by NFC
    -
    The mobile application uses the phone's built-in NFC chip to quickly transfer the photographed TCCC. It all happens thanks to the NFC plugin in the ionic framework.

   - Share by Bluetooth
    -
    If there is no NFC chip in the mobile device, you can transfer the NFC card via Bluetooth. It possible by ionic plugin: Bluetooth Serial. This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).
   
   - Share by Hotspot
    -
    If both methods are not suitable for the user, the ability to transfer TCCC via a hotspot has been added. There is a plugin for this - Hotspot Ionic. 


## Chat Room
   
   - Create/Join Room
    -
    Creating and joining a room takes two clicks. The doctor who creates the chat should share the room code with his or her colleague. You do not need the Internet to do this, the room is created on the local network
    

   - Real-time drug translation and search
    -

      This module implements the possibility of correspondence via a local network between doctors for a better understanding of each other, thanks to the automatic selection of analogues of their countries in real time. That is, if a doctor wants to show what medicines he has, he will send the names of the medicines to the chat, and the program will automatically select analogs and show each doctor the analog of this drug in his country. This will simplify the process of communication between doctors of different nationalities, and will allow you to see an international set of medicines that will be understandable to a doctor from any country 

## Checking Availability API
   - Integration solution in App
    -
    Thanks to this module, we will create an opportunity for interaction between all medical institutions in all NATO countries.
    This module will disseminate information between all medical institutions about the availability of certain medicines in the country
   
   - Example by tabletki.ua
    -
    Tabletki.ua is a useful service that enables you to check the availability of medicines in pharmacies. You can easily find the required drug using the search tool and verify its availability in over 12,000 pharmacies across Ukraine. This feature allows you to plan your medicine purchase conveniently and ensure that they are available when needed.
    That is, after integrating a similar API into the application. Users can check the availability of pills in the country where they will work




   


# Technologies Used

## FRONT-END
![Front](https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/FRONT.png)

**Ionic (React.js) + GraphQl + Node.js**

## Ionic Framework

Ionic is an open-source UI toolkit for building cross-platform mobile, web, and desktop applications using web technologies such as HTML, CSS, and JavaScript/TypeScript.

## Installation ionic
   ```shell
npm install -g @ionic/cli
```
## Launching the application

```shell
ionic serve --external [IP] ---port [PORT]
```

After installation, the application will be available at a local IP address http://localhost:8100/. 
You can open it in the Nexus browser using the given IP and port.

## Debugging the application

You can debug your application in the Nexus browser [Nexus Browser](https://nexusbrowser.com/home)

It can be downloaded from Google Play and Apple Store. 


## Ionic Extention

The Ionic extension for Visual Studio Code provides convenient tools for developing Ionic applications directly in your favorite code editor.
 [Ionic VS Code Extention](https://marketplace.visualstudio.com/items?itemName=ionic.ionic)
 

![Ionic VS Code](https://user-images.githubusercontent.com/84595830/159510276-6766a5b8-132d-4284-a3fa-cd6374d64891.gif)



## Capacitor
You can add Capacitor to your existing application by choosing "Integrate Capacitor".
 [Capacitor by Ionic](https://capacitorjs.com/)

 
![Ionic VS Code](https://user-images.githubusercontent.com/84595830/159510570-b5a151bb-2e17-42c8-8cab-bffbaa849576.gif)
With Capacitor integrated, you can now run your app on web, Android, and iOS with the "Run On Web", "Run On Android", and "Run On iOS" options.

## Tesseract
Tesseract is an open source text recognition (OCR) Engine. It can be used directly, or (for programmers) using an API to extract printed text from images. It supports a wide variety of languages.
Installer for Windows for Tesseract 3.05, Tesseract 4 and Tesseract 5 are available from Tesseract at UB Mannheim. 

## VS Code Extension for work

 [Ionic Preview](https://marketplace.visualstudio.com/items?itemName=ionic-preview.ionic-preview)

 
 [Ionic Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-ionic-snippets)
 
## BACK-END
![Back_END](https://github.com/b33tle-k1ddie/interhealth/blob/master/src/assets/demo/back.png)

**NodeJS+SQLLite+Python**

## SQLite Tools

SQLite is a database engine written in the C programming language. It is not a standalone app; rather, it is a library that software developers embed in their apps. As such, it belongs to the family of embedded databases. It is the most widely deployed database engine, as it is used by several of the top web browsers, operating systems, mobile phones, and other embedded systems.

To download SQLite, you open the download page of the SQlite official website.

## NodeJS

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

**Install the Node.js extension:**

 Open Visual Studio Code and navigate to the "Extensions" tab (or press `Ctrl+Shift+X`). In the search bar, type "Node.js" and install the extension developed by Microsoft.
**Create a new project:**

Create a new folder for your project and open it in Visual Studio Code.

**Initialize a Node.js project:**

Open the terminal in Visual Studio Code by selecting "Terminal" > "New Terminal" (or press `Ctrl+``). In the terminal, run the command `npm init` to create a `package.json` file and enter necessary project details.

**Install packages:**

Use the terminal to install necessary packages for your project. For example:

```bash
npm install express
```
**Create project files:**

Create or add necessary files for your project (e.g., `index.js`, `app.js`, etc.).

**Work with the project:**

    Develop your code in Visual Studio Code. You can utilize all features of this development environment for writing, debugging, and testing your Node.js code.

## MongoDB

MongoDB is a NoSQL database management system that utilizes a document-oriented data model, offering flexibility in storing and querying complex data structures without requiring a predefined schema. Its key advantages include high performance, horizontal scalability across clusters, and support for replica sets, ensuring data availability and durability. MongoDB's rich query language, flexible deployment options, and extensive community support make it a popular choice for applications requiring rapid development and scalability.

&copy; DPSU_IT_HUB 2024
