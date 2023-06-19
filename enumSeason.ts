enum Season {
    SPRING = "春",
    SUMMER = "夏",
    AUTUMN = "秋",
    WINTER = "冬"
};

function seasonToJapanese(season: Season) {
    switch (season) {
        case Season.SPRING:
            console.log(season);
            break;
        case Season.SUMMER:
            console.log(season);
            break;
        case Season.AUTUMN:
            console.log(season);
            break;
        case Season.WINTER:
            console.log(season);
            break;
    };
};

seasonToJapanese(Season.AUTUMN);