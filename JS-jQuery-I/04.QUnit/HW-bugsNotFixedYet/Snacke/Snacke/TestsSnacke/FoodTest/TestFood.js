module("Food.init");
test("Init must be correct", function () {
    var position = { x: 10, y: 20 }
    var size = 10;
    var food = new snakeGame.Food(position, size);
    equal(food.size, size, "size is correct");
    equal(food.position.x, position.x, "position x is correct");
    equal(food.position.y, position.y, "position y is correct");
});
test("Init must be correct", function () {
    var position = { x: 110, y: 200 }
    var size = 10;
    var food = new snakeGame.Food(position, size);
    equal(food.size, size, "size is correct");
    equal(food.position.x, position.x, "position x is correct");
    equal(food.position.y, position.y, "position y is correct");
});

module("Food.changePosition");
test("Position must be correct", function () {
    var position = { x: 110, y: 200 }
    var size = 10;
    var food = new snakeGame.Food(position, size);
    var newPosition = { x: 50, y: 90 };
    food.changePosition(newPosition);
    equal(food.position.x, newPosition.x, "Position x is equal");
    equal(food.position.y, newPosition.y, "Positions y is equal");
});
test("Position must be correct", function () {
    var position = { x: -110, y: 200 }
    var size = 10;
    var food = new snakeGame.Food(position, size);
    var newPosition = { x: 50, y: 90 };
    food.changePosition(newPosition);
    equal(food.position.x, newPosition.x, "Position x is equal");
    equal(food.position.y, newPosition.y, "Positions y is equal");
});