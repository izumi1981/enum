var Fruit;
(function (Fruit) {
    Fruit[Fruit["APPLE"] = 0] = "APPLE";
    Fruit[Fruit["BANANA"] = 1] = "BANANA";
    Fruit[Fruit["ORANGE"] = 2] = "ORANGE";
    Fruit[Fruit["STRAWBERRY"] = 3] = "STRAWBERRY";
})(Fruit || (Fruit = {}));
var answer = Fruit.ORANGE;
var correctAnswer = Fruit.ORANGE;
if (answer === correctAnswer) {
    console.log("正解です！");
}
else {
    console.log("不正解です。正解はみかんです。");
}
