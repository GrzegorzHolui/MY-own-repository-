// static const unsigned BOARD_HEIGHT = 10;
// static const unsigned BOARD_WIDTH = 20;
#include <iostream>
#include <array>
#include <cstdlib>
#include <ctime>
#include "Snake.hpp"
#include "Apple.hpp"
#include "Board.hpp"

void supper(Snake& snake, Apple& apple)
{
    if ((snake.SnakeY == apple.appleY) && (snake.SnakeX == apple.appleX)) {
        apple.eatApple(snake);
        apple.plantApple(snake);
    }
}


int main()
{
    Apple apple;
    Snake snake;
    Board board;
    apple.plantApple(snake);
    while(true)
    {
        board.initializeBoard();
        board.printBoard(snake, apple);
        std::string p;
        std::cin >> p;
        snake.move(p);
        snake.checkBorder();
        supper(snake,apple);
    }
    return 0;
}
