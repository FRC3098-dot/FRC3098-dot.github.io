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
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
     { "name": "Autos: where do yolu start?<br>(from drivers station perspective)",
      "code": "strtpos",
      "type": "radio",
      "choices": {
        "L": "Left<br>",
        "R": "Right<br>",
        "C": "Center<br>",
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
