//Map of all games, their genre, and their freq that will be used to determine 
//what games the quiz returns
let allGames = {
    Valorant: {
        freq: 0,
        genre: "shooter"
    },
    Fortnite: {
        freq: 0,
        genre: "shooter"
    },
    Escape_from_Tarkov: {
        freq: 0,
        genre: "shooter"
    },
    Destiny_2: {
        freq: 0,
        genre: "shooter"
    },
    Superhot: {
        freq: 0,
        genre: "shooter"
    },
    Minecraft: {
        freq: 0,
        genre: "survival"
    },
    Subnautica: {
        freq: 0,
        genre: "survival"
    },
    Valheim: {
        freq: 0,
        genre: "survival"
    },
    Terraria: {
        freq: 0,
        genre: "survival"
    },
    Raft: {
        freq: 0,
        genre: "survival"
    },
    Hogwarts_Legacy: {
        freq: 0,
        genre: "adventure"
    },
    It_Takes_Two: {
        freq: 0,
        genre: "adventure"
    },
    God_of_War: {
        freq: 0,
        genre: "adventure"
    },
    Roblox: {
        freq: 0,
        genre: "adventure"
    },
    Stray: {
        freq: 0,
        genre: "adventure"
    }
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    let submitBtn = document.getElementById("submit");
    let restartBtn = document.getElementById("restart");
    let resultDiv = document.getElementById("results");

    submitBtn.addEventListener("click", function() {
        let radioBtns = document.querySelectorAll("input");
        let answers = [];
        let index = 0;
    
        for (let x = 0; x < radioBtns.length; x++) {
            if (radioBtns[x].type == "radio"){
                if (radioBtns[x].checked){
                    answers[index] = radioBtns[x].value;
                    index++;
                }
            }
        }
        
        if (index == 5){
            resultDiv.innerHTML = "<p>Your quiz results are...</p>";
            calculateResults(answers, allGames);
        }
        else{
            resultDiv.innerHTML = "<p>You have not answered all the questions!</p>";
        }


        let quizResults = [];
        let resultIndex = 0;
        for (game in allGames) {
            console.log(game + ": " + allGames[game].freq);

            if (allGames[game].freq > 2)
            {
                quizResults[resultIndex] = game;
                resultIndex++;
            }
        }

        for (game in allGames) {
            if (quizResults.length < 3 && allGames[game].freq > 1 && allGames[game].freq < 3)
            {
                quizResults[resultIndex] = game;
                resultIndex++;
            }

        }
        
        

        console.log(quizResults);

        resultDiv.innerHTML = setResults(quizResults[0],quizResults[1],quizResults[2]);

        resetGames(allGames);
    });

    restartBtn.addEventListener("click", function() {
        let radioBtns = document.querySelectorAll("input");
        for (let x = 0; x < radioBtns.length; x++) {
            if (radioBtns[x].type == "radio"){
                radioBtns[x].checked = false;
            }
        }

        resultDiv.innerHTML = "<p>Quiz reset! Thank you for taking our quiz!</p>";

    });
}

function calculateResults(answers, allGames){
    for (let x = 0; x < answers.length; x++){
        let answer = answers[x];

        //Question 1
        if (answer == "10orLess"){
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["Roblox"].freq = (allGames["Roblox"].freq+1);
        }
        else if (answer == "10to15"){
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["Stray"].freq = (allGames["Stray"].freq+1);
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
        }
        else if (answer == "16to21"){
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq+1);
            allGames["Destiny_2"].freq = (allGames["Destiny_2"].freq+1);
            allGames["Valheim"].freq = (allGames["Valheim"].freq+1);
            allGames["Subnautica"].freq = (allGames["Subnautica"].freq+1);
            allGames["Raft"].freq = (allGames["Raft"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Valorant"].freq = (allGames["Valorant"].freq+1);
        }
        else if (answer == "22plus"){
            allGames["Superhot"].freq = (allGames["Superhot"].freq+1);
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+1);
            allGames["Hogwarts_Legacy"].freq = (allGames["Hogwarts_Legacy"].freq+1);
        }
        //Question 2
        else if (answer == "beginner"){
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["Roblox"].freq = (allGames["Roblox"].freq+1);
            allGames["Superhot"].freq = (allGames["Superhot"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+1);
            allGames["Stray"].freq = (allGames["Stray"].freq+1);
        }
        else if (answer == "amateur"){
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Destiny_2"].freq = (allGames["Destiny_2"].freq+1);
            allGames["Valheim"].freq = (allGames["Valheim"].freq+1);
            allGames["Raft"].freq = (allGames["Raft"].freq+1);
            allGames["Hogwarts_Legacy"].freq = (allGames["Hogwarts_Legacy"].freq+1);
        }
        else if (answer == "expert"){
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq+1);
            allGames["Subnautica"].freq = (allGames["Subnautica"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Valorant"].freq = (allGames["Valorant"].freq+1);
        }
        //Question 3 
        else if (answer == "alone"){
            allGames["Superhot"].freq = (allGames["Superhot"].freq+1);
            allGames["Subnautica"].freq = (allGames["Subnautica"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["Hogwarts_Legacy"].freq = (allGames["Hogwarts_Legacy"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Stray"].freq = (allGames["Stray"].freq+1);
        }
        else if (answer == "withSO"){
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+2);
            allGames["Roblox"].freq = (allGames["Roblox"].freq+1);
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
        }
        else if (answer == "withFriends"){
            allGames["Roblox"].freq = (allGames["Roblox"].freq+1);
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["Valorant"].freq = (allGames["Valorant"].freq+1);
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq+1);
            allGames["Destiny_2"].freq = (allGames["Destiny_2"].freq+1);
            allGames["Valheim"].freq = (allGames["Valheim"].freq+1);
            allGames["Raft"].freq = (allGames["Raft"].freq+1);
        }
        //Question 4
        else if (answer == "fantasy"){
            allGames["Destiny_2"].freq = (allGames["Destiny_2"].freq+1);
            allGames["Valheim"].freq = (allGames["Valheim"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Stray"].freq = (allGames["Stray"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["Hogwarts_Legacy"].freq = (allGames["Hogwarts_Legacy"].freq+1);
        }
        else if (answer == "realistic"){
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq+1);
            allGames["Raft"].freq = (allGames["Raft"].freq+1);
            allGames["Superhot"].freq = (allGames["Superhot"].freq+1);
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+1);
        }
        //Question 5
        else if (answer == "competitive"){
            allGames["Valorant"].freq = (allGames["Valorant"].freq+1);
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq+1);
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
            allGames["Destiny_2"].freq = (allGames["Destiny_2"].freq+1);
        }
        else if (answer == "sometimesCompetitive"){
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+1);
            allGames["God_of_War"].freq = (allGames["God_of_War"].freq+1);
            allGames["Fortnite"].freq = (allGames["Fortnite"].freq+1);
        }
        else if (answer == "notCompetitive"){
            allGames["Superhot"].freq = (allGames["Superhot"].freq+1);
            allGames["Terraria"].freq = (allGames["Terraria"].freq+1);
            allGames["Minecraft"].freq = (allGames["Minecraft"].freq+1);
            allGames["Subnautica"].freq = (allGames["Subnautica"].freq+1);
            allGames["Valheim"].freq = (allGames["Valheim"].freq+1);
            allGames["Raft"].freq = (allGames["Raft"].freq+1);
            allGames["Roblox"].freq = (allGames["Roblox"].freq+1);
            allGames["It_Takes_Two"].freq = (allGames["It_Takes_Two"].freq+1);
            allGames["Stray"].freq = (allGames["Stray"].freq+1);
            allGames["Valorant"].freq = (allGames["Valorant"].freq-1);
            allGames["Escape_from_Tarkov"].freq = (allGames["Escape_from_Tarkov"].freq-1);
        }
    }
}

function setResults(game1, game2, game3){
    let games = [game1,game2,game3];
    for (let x = 0; x < games.length; x++)
    {
        games[x] = games[x].split('_').join(' ');
    }
    
    let str = '<table>' + 
        '<tr><th>' + '<img src="images/' + game1 + '.png" alt="' + game1 + '"></th>' + 
        '<th>' + '<img src="images/' + game2 + '.png" alt="' + game2 + '"></th>' + 
        '<th>' + '<img src="images/' + game3 + '.png" alt="' + game3 + '"></th></tr>' +
        '<tr><th>' + games[0] + '</th><th>' + games[1] + '</th><th>' + games[2] + '</th></tr>' + 
        '</table>' + '<p id="desc">See all game descriptions <a href="list.html">here!</a></p>';

    return str;
}

//Resets all frequencies
function resetGames(allGames) {
    for (game in allGames) {
        allGames[game].freq = 0;
    }
}