function gameObject() {
    let newObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    };
    return newObj;
}

console.log(gameObject());

function players() {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players

    return Object.assign({}, homePlayers, awayPlayers)
}

console.log(players());

function numPointsScored(playerInput) {
    for (const playerName in players()) {
        if (playerName === playerInput) {
            return players()[playerName].points
        }
    }
}

numPointsScored("DeSagna Diop");


function shoeSize(playerInput) {
    for (const playerName in players()) {
        if (playerName === playerInput) {
            return players()[playerName].shoe
        }
    }  
}
// returns shoe size for that player

shoeSize("DeSagna Diop");

function teamName() {
    const game = gameObject()
    const homeTeam = game.home
    const awayTeam = game.away

    return Object.assign({}, homeTeam, awayTeam);
}

console.log(teamName());

function teamColors(teamInput) {
    for (const team in teams()) {
        if (team === teamInput) {
            return teams().colors
        }
    }

// returns an array of that teams colors
}

teamColors("Brooklyn Nets");

function teamNames() {
    const newArr = [];
    const game = gameObject();
    const homeTeam = game.home.teamName
    const awayTeam = game.away.teamName

    return newArr.push(homeTeam, awayTeam)
// operates on the game object to return an array of team names
}

function playerNumbers(teamName) {

// returns array of the jersey numbers for that team
}

function playerStats(playerName) {
// returns object of that player's stats
}

function bigShoeRebounds() {
    // returns number of rebounds associated with the player that has the largest shoe size
    // first: find player with largest shoe size
    // second: return that player's number of rebounds
}

mostPointsScored();
winningTeam();
playerWithLongestName();


function doesLongNameStealATon() {
    // returns true if the player with the longest name had the most steals
}







// function grabKeys(newObj) {
//     for (let key in newObj) {
//         let value = newObj[key];
//         console.log("key:", key, "value:", value);
//     }
// }