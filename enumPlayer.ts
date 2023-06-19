enum Player {
    PLAYER_1 = 1,
    PLAYER_2,
    PLAYER_3,
    PLAYER_4
};

function playerToNumber(player: Player) {
    switch (player) {
        case Player.PLAYER_1:
            console.log(player);
            break;
        case Player.PLAYER_2:
            console.log(player);
            break;
        case Player.PLAYER_3:
            console.log(player);
            break;
        case Player.PLAYER_4:
            console.log(player);
            break;
    };
};

playerToNumber(Player.PLAYER_2);