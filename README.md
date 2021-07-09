# Backend Repo for Trojan Finance.

## Package Scripts.

Run with node14+

Build will generate a dist folder to heroku server.
But first to init your backend u should, follow this order =).

- ci: will create all needed tables and indexes in mongo server

- it: Having this data will save us a lot of time fetching tokens data from other sources, and actually if there is a transaction that involves a token
  that we dont have in our database, live servers will add them to our persistance in real time so dont worry, this persistance will keep updated by itself.

- iw: Just a know base database to full with known address to watch or whales

## .env file

Check the .sample-env file, you can create a .env file and set your keys.

- ATLAS : Its important to know that for websocket live updates u need a mongodb cluster for OPLOG features, this makes possible the oplog WATCH to monitor live database changes and send them to the UI. We use atlas service for this.

- set-heroku: will create all env in to heroku server
