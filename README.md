# SibylSystem-Js

>NodeJs wrapper for the Sibyl System antispam API for telegram

## Installation

```
npm i sibylsystem
```
# Usage

```
>>> const { PyschoPass }  =  require("sibysystem");
>>> const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});


>>> Sibyl.getInfo("1610284626").then(console.log)
user_id=1610284626, banned=True, reason='Arcane', message='', ban_source_url='', date='2021-10-30T18:47:00.004137+05:30', banned_by=0, crime_coefficient=0)
