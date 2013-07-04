module("Moving game objects.init");
test("Testing constructor correct init", function () {
    var position = { x: 10, y: 10 };
    var size = 10;
    var fcolor = "#000000";
    var scolor = "#eeeeee";
    var speed = 55;
    var direction = 3;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    equal(position, movingObj.position,"Position is correct");
    equal(size, movingObj.size, "Size prop is correct");
    equal(fcolor, movingObj.fcolor, "Fcolor is correct");
    equal(scolor, movingObj.scolor, "Scolor is correct");
    equal(speed, movingObj.speed, "Speed is correct");
    equal(direction, movingObj.direction, "Direction is correct");
});
test("Testing constructor correct init", function () {
    var position = { x: 250, y: 1000 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 555;
    var direction = 6;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    equal(position, movingObj.position, "Position is correct");
    equal(size, movingObj.size, "Size prop is correct");
    equal(fcolor, movingObj.fcolor, "Fcolor is correct");
    equal(scolor, movingObj.scolor, "Scolor is correct");
    equal(speed, movingObj.speed, "Speed is correct");
    equal(direction, movingObj.direction, "Direction is correct");
});

module("MovingGameObject.move");
test("Move negative Y(-1)", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    movingObj.move();
    // equal will return false( {} === {}) reference
    //deep equal will return true 
    deepEqual(movingObj.position, { x: 5, y: 9 }, "Correct movment");
    equal(movingObj.position.x, { x: 5, y: 9 }.x,"Correct movment");
    equal(movingObj.position.y, { x: 5, y: 9 }.y, "Correct movment");
});
test("Move negative Y(-3)", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    movingObj.move();
    movingObj.move();
    movingObj.move();
    equal(movingObj.position.x, { x: 5, y: (10 - 3) }.x, "Correct movement(3 times)");
    equal(movingObj.position.y, { x: 5, y: (10 - 3) }.y, "Correct movement(3 times)");
});
test("Move positive Y(+1)", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 3;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    movingObj.move();
    equal(movingObj.position.x, { x: 5, y: 11 }.x, "Correct movement");
    equal(movingObj.position.y, { x: 5, y: 11 }.y, "Correct movement");
});
test("Move positive X(+1)", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 2;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    movingObj.move();
    equal(movingObj.position.x, { x: 6, y: 10 }.x, "Correct movement");
    equal(movingObj.position.y, { x: 6, y: 10 }.y, "Correct movement");
});
test("Move negative X(-1)", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    movingObj.move();
    equal(movingObj.position.x, { x: 4, y: 10 }.x, "Correct movement");
    equal(movingObj.position.y, { x: 4, y: 10 }.y, "Correct movement");
});

module("MovingGameObject.changeDirection");
test("Test with direction > 3", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
   
    var newDirection = 5;
    var oldDirection = movingObj.direction;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, oldDirection);
});
test("Test from 0 to 0 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;// from 0 to 3
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 0;
    var oldDirection = movingObj.direction;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, oldDirection);
});
test("Test from 0 to 1 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 1;
    var expectedDirection = 1;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection,"From left to down direction");
});
test("Test from 0 to 2 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 2;
    var expectedDirection = 0;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From left to right direction");
});
test("Test from 0 to 3 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 0;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 3;
    var expectedDirection = 3;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From left to up direction");
});
test("Test from 1 to 0 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 0;
    var expectedDirection = 0;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From down to left direction");
});
test("Test from 1 to 1 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 1;
    var expectedDirection = 1;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From down to down direction");
});
test("Test from 1 to 2 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 2;
    var expectedDirection = 2;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From down to right direction");
});
test("Test from 1 to 3 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 1;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 3;
    var expectedDirection = 1;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From down to up direction");
});

// direction right
test("Test from 2 to 0 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 2;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 0;
    var expectedDirection = 2;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From right to left direction");
});
test("Test from 2 to 1 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 2;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 1;
    var expectedDirection = 1;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From right to down direction");
});
test("Test from 2 to 2 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 2;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 2;
    var expectedDirection = 2;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From right to right direction");
});
test("Test from 2 to 3 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 2;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 3;
    var expectedDirection = 3;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From right to up direction");
});

//test up direction
test("Test from 3 to 0 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 3;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 0;
    var expectedDirection = 0;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From up to up direction");
});
test("Test from 3 to 1 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 3;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 1;
    var expectedDirection = 3;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From up to down direction");
});
test("Test from 3 to 2 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 3;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 2;
    var expectedDirection = 2;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From up to right direction");
});
test("Test from 3 to 0 direction", function () {
    var position = { x: 5, y: 10 };
    var size = 50;
    var fcolor = "#00a000";
    var scolor = "#eeeeee";
    var speed = 1;
    var direction = 3;
    var movingObj = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);

    var newDirection = 3;
    var expectedDirection = 3;

    movingObj.changeDirection(newDirection);
    deepEqual(movingObj.direction, expectedDirection, "From up to up direction");
});