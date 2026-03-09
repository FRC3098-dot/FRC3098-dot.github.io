var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
       { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"}
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot (Floor Box) pickup Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost (Human Player) pickup Fuel",
      "code": "opu",
      "type": "bool"
    },
     { "name": "Does your Robot hang?",
      "code": "oph",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "Autos: where do you start?<br>(from drivers station perspective)",
      "code": "strtpos",
      "type": "radio",
      "choices": {
        "L": "Left<br>",
        "R": "Right<br>",
        "C": "Center<br>",
        "A": "Any<br>",
        "SO": "Either Side<br>"}
    },
     { "name": "Autos: Does your Robot move during auton?",
      "code": "autom",
      "type": "bool"
    },
     { "name": "Autos: Does your Robot score during auton?",
      "code": "autos",
      "type": "bool"
    },
     { "name": "Autos: Does your Robot hang during auton?",
      "code": "autoh",
      "type": "bool"
    },
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
