# Dive Log Planning Document

## Quick Stats
+ Name: TBD
+ Tech stack: HTML/CSS/JS/Express/Mongo/Handlebars/Node, and possibly D3

<img src="dive_log_example.jpeg" width="40%" align="right">
## Background Summary
Keeping a dive log is a crucial part of any serious diver's routine.  The log – traditionally taking the form of a pad-and-pen binder or notebook – keeps track of crucial details like how much weight the diver used, his/her time at the bottom, tracks repair notes and equipment issues, and provides a record of milestones that can be crucial as the diver advances in his or her underwater career.  It also allows for your other divers and/or dive shops to vouch that a dive is legitimate, proving the diver's expertise when he or she seeks advanced training. See more about the <a href="https://www2.padi.com/blog/2015/05/07/why-keeping-a-logbook-will-help-make-you-a-better-diver/">importance of logging on PADI's website</a>.

However, keeping track of a physical notebook can be tedious, especially for diver's who travel around the world.  Similarly, more casual divers (those who only dive a few times a year) may risk misplacing their book between sessions.  A simple electronic implementation of a dive book can overcome these annoyances, while allowing for helpful data analysis and visualization across dives that isn't readily available in a physical log book.  

Extending the idea further, the app could make API calls to weather services to pre-fill information such as surface weather and/or wave conditions.

## Data Models
+ User
  + Email
  + Password
  + Dives (connected model)
  + Certificaton
  + Certification date

+ Dive
  + Dive number (automatic?)
  + Date
  + Location
  + Visibility
  + Air Temperature
  + Surface Temperature
  + Bottom Temperature
  + Weight Used
  + Exposure Protection (Tick boxes: Wetsuit / Dry Suit / Hood / Gloves / Boots)
  + Start air pressure (need to decide PSI or bar)
  + End air pressure (need to decide PSI or bar)
  + Time in
  + Time out
  + Comments (text area)
  + Bottom time to date (automatic?)
  + Verifiers (over USERS who can vouch for this dive)

+ Dive Site
  + Name
  + Location (coordinates?)
  + Type (shipwreck / reef)
  + Date created (sunk / built)
  + Average Approximate Depth
  + Typical visibility
  + Average reported visibility (automatically calculated from user reports?)
  + Typical temperature
  + Average reported temperature
  + Summary
