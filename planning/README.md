# Dive Log Planning Document

## Quick Stats
+ Name: TBD
+ Tech stack: HTML/CSS/JS/Express/Mongo/Handlebars/Node/lots of 'Life Aquatic with Steve Zissou' gifs, and possibly D3

<img src="dive_log_example.jpeg" width="40%" align="right">

## Background Summary

Keeping a dive log is a crucial part of any serious diver's routine.  The log – traditionally taking the form of a pad-and-pen binder or notebook – keeps track of crucial details like how much weight the diver used, his/her time at the bottom, tracks repair notes and equipment issues, and provides a record of milestones that can be crucial as the diver advances in his or her underwater career.  It also allows for your other divers and/or dive shops to vouch that a dive is legitimate, proving the diver's expertise when he or she seeks advanced training. See more about the <a href="https://www2.padi.com/blog/2015/05/07/why-keeping-a-logbook-will-help-make-you-a-better-diver/">importance of logging on PADI's website</a>.

However, keeping track of a physical notebook can be tedious, especially for diver's who travel around the world.  Similarly, more casual divers (those who only dive a few times a year) may risk misplacing their book between sessions.  A simple electronic implementation of a dive book can overcome these annoyances, while allowing for helpful data analysis and visualization across dives that isn't readily available in a physical log book.  

Extending the idea further, the app could make API calls to weather services to pre-fill information such as surface weather and/or wave conditions.

:camera: Image of a PADI logbook, taken by Paul Blake in Dubai, UAE - 2018

## Data Models
+ User
  + Email
  + Password
  + Certificaton
  + Certification date
  + ~~Dives (connected model)~~

+ Dive
  + Dive number (Could this default to whatever the previous one was +1?)
  + Date (Defaults to entry date)
  + Site
  + Visibility
  + Air Temperature
  + Water Temperature
  + Weight Used
  + Air Used
  + Bottom Time
  + Notes (text area)
  + Owner (a USER)

  + **BONUS**: Verifiers (other USERS who can vouch for the veracity of this dive entry)

  + ~~Exposure Protection (Tick boxes: Wetsuit / Dry Suit / Hood / Gloves / Boots)~~
  + ~~Start air pressure (need to decide PSI or bar)~~
  + ~~End air pressure (need to decide PSI or bar)~~
  + ~~Time in~~
  + ~~Time out~~
  + ~~Surface Temperature~~
  + ~~Bottom Temperature~~
  + ~~Bottom time to date (automatic?)~~

+ Dive Location (LocationSchema)
  + Name
  + Coordinates (coordinates?)
  + Type (shipwreck / reef)
  + Description
  
  + ~~Date created (sunk / built)~~
  + ~~Average Approximate Depth~~
  + ~~Typical visibility~~
  + ~~Average reported visibility (automatically calculated from user reports?)~~
  + ~~Typical temperature~~
  + ~~Average reported temperature~~

## Resource Table

| URL       | Path                    | Method         | Action | Description                                                                         |
|-----------|-------------------------|----------------|--------|-------------------------------------------------------------------------------------|
| /         | /                       | index          | GET    | Show's a splash page                                                                |
| /user     | /user/:id               | show           | GET    | Shows a single user their dashboard: Contains dives and analysis.                   |
| /user     | /user/login             | showLogin      | GET    | Shows a login page for a registered user.                                           |
| /user     | /user/login             | processLogin   | POST   | Sends login data.                                                                   |
| /user     | /user/sign-up           | newUser        | GET    | Shows a form for signing up a new user.                                             |
| /user     | /user/sign-up           | createNewUser  | POST   | Takes form data and creates a new user.                                             |
| /user     | /user/logout            | processLogout  | GET    | Process a logout by the user.                                                       |
| /dive     | /dive/:id               | showDive       | GET    | Shows details about a single dive. Bonus: Allows other users to vouch for the dive. |
| /dive     | /dive/new-dive          | newDive        | GET    | Shows a form for registering a new dive.                                            |
| /dive     | /dive/new-dive          | createNewDive  | POST   | Takes form data and creates a new dive.                                             |
| /divesite | /divesite/:id           | showDivesite   | GET    | Shows details about a dive site.                                                    |
| /divesite | /divesite/all           | showAllDivesites| GET   | Shows all dive sites registered in the database.                                    |
| /divesite | /divesite/new-dive-site | newDivesite    | GET    | Shows a form for registering a new dive site.                                       |
| /divesite | /divesite/new-dive-site | createDivesite | POST   | Takes form data and creates a new dive site.                                        |
| /divesite | /divesite/:id/update    | showDiveSiteUpdate| GET | Shows a form to update divesite data.                                               |
| /divesite | /divesite/:id/update    | updateDiveSite | PUT    | Takes form data and updates dive site.                                              |