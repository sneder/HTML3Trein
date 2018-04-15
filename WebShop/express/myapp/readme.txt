GroupID: 
63

Authors: 
Jason Steijn 6219195 
Thomas Mosterd 6280838

URL: 
http://webtech.science.uu.nl/group63/

Explanation:
The website is a webshop that sells trains, going nicely with the theme of our two previous websites.

The database has a mere 3 tables.
The tables (first attribute is the primary key): 
Accounts(UserName, Password, Name, PostalCode, Email)
Trains(TrainID, Name, Manufacturer, YearOfConstruction, LengthM, PowerKW, PriceGRAND)
Transactions(TransactionID, Time, ProductBought, Buyer)

The last two attributes of Transactions are Foreign Keys, linking to TrainID and UserName respectively.


Logins: 
(username, password)
sneder, 12345
Admin, admin
thomas, train
apollo, sun
zeus, thunder
hera, family
poseidon, sea
aphrodite, love
ares, war


DDL Stateents:

CREATE TABLE Accounts (
    UserName   VARCHAR UNIQUE
                       NOT NULL
                       PRIMARY KEY,
    Password   VARCHAR NOT NULL
                       UNIQUE,
    Name       VARCHAR NOT NULL,
    PostalCode VARCHAR NOT NULL,
    Email      VARCHAR UNIQUE
);
CREATE TABLE Trains (
    TrainID            INTEGER PRIMARY KEY
                               UNIQUE
                               NOT NULL,
    Name                       UNIQUE
                               NOT NULL,
    Manufacturer       VARCHAR,
    YearOfConstruction DATE,
    LengthM            INTEGER,
    PowerKW            INTEGER,
    PriceGRAND          INTEGER
);
CREATE TABLE Transactions (
    TransactionID INTEGER  PRIMARY KEY,
    Time          DATETIME NOT NULL,
    ProductBought INTEGER  REFERENCES Trains (TrainID),
    Buyer                  REFERENCES Accounts (UserName) 
);


