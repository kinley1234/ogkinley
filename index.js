document.getElementById("calculateButton").addEventListener("click", calculateLove);

function calculateLove() {
    var playerName = document.getElementById("playerName").value.trim();
    var crushName = document.getElementById("crushName").value.trim();

    if (playerName === "" || crushName === "") {
        alert("Please enter both names.");
        return;
    }

    var loveScore = calculateLoveScore(playerName, crushName);
    var resultText = getResultText(loveScore);

    document.getElementById("result").textContent = resultText;
}

function calculateLoveScore(playerName, crushName) {
    var lowerPlayerName = playerName.toLowerCase();
    var lowerCrushName = crushName.toLowerCase();
    var matchingChars = 0;

    for (var i = 0; i < lowerPlayerName.length; i++) {
        for (var j = 0; j < lowerCrushName.length; j++) {
            if (lowerPlayerName[i] === lowerCrushName[j]) {
                matchingChars++;
                lowerCrushName = lowerCrushName.substring(0, j) + lowerCrushName.substring(j + 1);
                break;
            }
        }
    }

    return Math.round((matchingChars / (playerName.length + crushName.length)*1.5) * 100);
}

function getResultText(loveScore) {
    if (loveScore < 40) {
        return `Your love score is ${loveScore}%. Maybe it's not meant to be...`;
    } else if (loveScore >= 40 && loveScore < 70) {
        return `Your love score is ${loveScore}%. There's potential!`;
    } else {
        return `Your love score is ${loveScore}%. Wow, sparks are flying!`;
    }
}