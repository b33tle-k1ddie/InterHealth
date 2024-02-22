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




   
