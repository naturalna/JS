/// <reference path="snake-tests.js" />
module("Snake.init");

test("When snake is initialized, should set the correct values", function() {
  var position = {
    x: 150,
    y: 150
  };
  var speed = 15;
  var direction = 0;
  var snake = new snakeGame.Snake(position, speed, direction);

  equal(position, snake.position, "Position is set");
  equal(speed, snake.speed, "Speed is set");
  equal(direction, snake.direction, "Direction is set");
});

test("When snake is initialized, should contain 10 SnakePieces", function() {
  var position = {
    x: 150,
    y: 150
  };
  var speed = 15;
  var direction = 0;
  var snake = new snakeGame.Snake(position, speed, direction);

  ok(snake.pieces,"SnakePieces are created");
  equal(snake.pieces.length, 10,"Five SnakePieces are created");
  ok(snake.head, "HeadSnakePiece is created");
});


module("Snake.Consume");
test("When object is Food, should grow", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);
  var size = snake.size;
  snake.consume(new snakeGame.Food());
  var actual = snake.size;
  var expected = size + 1;
  equal(actual, expected);
});

test("When object is SnakePiece, should die", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);

  var isDead = false;

  snake.addDieHandler(function() {
    isDead = true;
  });

  snake.consume(new snakeGame.SnakePiece());
  ok(isDead, "The snake is dead");
});

test("When object is Obstacle, should die", function() {
  var snake = new snakeGame.Snake({
    x: 150,
    y: 150
  }, 15, 0);

  var isDead = false;

  snake.addDieHandler(function() {
    isDead = true;
  });

  snake.consume(new snakeGame.Obstacle());
  ok(isDead, "The snake is dead");
});


module("Snake.move");
test("When direction is 0, decrease x",
  function () {
      var position = {
          x: 150,
          y: 150
      };
      var speed = 15;
      var direction = 0;
      var snake = new snakeGame.Snake(position, speed, direction);
      snake.move();
      position.x - speed;
      deepEqual(snake.position, position);
  });
test("When  direction is 1, decrease update y",
  function () {
      var position = {
          x: 150,
          y: 150
      };
      var speed = 15;
      var direction = 0;
      var snake = new snakeGame.Snake(position, speed, direction);
      snake.move();
      position.y - speed;
      deepEqual(snake.position, position);
  });
test("When  direction is 2, increase x",
  function () {
      var position = {
          x: 150,
          y: 150
      };
      var speed = 15;
      var direction = 0;
      var snake = new snakeGame.Snake(position, speed, direction);
      snake.move();
      position.x + speed;
      deepEqual(snake.position, position);
  });
test("When  direction is 3, should increase x",
  function () {
      var position = {
          x: 150,
          y: 150
      };
      var speed = 15;
      var direction = 0;
      var snake = new snakeGame.Snake(position, speed, direction);
      snake.move();
      position.y + speed;
      deepEqual(snake.position, position);
  });
module("snake.grow");
test("Grow", function () {
    var position = {
        x: 150,
        y: 150
    };
    var speed = 15;
    var direction = 0;
    var snake = new snakeGame.Snake(position, speed, direction);
    var snakeLength = snake.size;
    snake.grow();
    ok(snake.size, snakeLength,"growing length is correct");
});