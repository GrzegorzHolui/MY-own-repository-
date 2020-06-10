#include "Board.hpp"
void Board::printBoard(Snake snake, Apple apple)
{
for (int i = 0; i < BOARD_HEIGHT; i++) {
    for (int j = 0; j < BOARD_WIDTH; j++) {
        if (i == snake.SnakeY && j == snake.SnakeX) {
            snake.printSnake();
            j += snake.tail.size() - 1;
            continue;
        }
        if (i == apple.appleY && j == apple.appleX) {

            //apple.plantApple(snake);
            std::cout << "@";
            continue;
        }
        std::cout << board[i][j];
    }
    std::cout << std::endl;
}
}
void Board::initializeBoard()
{
 for (int i = 0; i < BOARD_HEIGHT; i++)
    for (int j = 0; j < BOARD_WIDTH; j++) {
        board[i][j] = ' ';
    }
makeFrame();
}

void Board::makeFrame()
{
    for (int i = 0; i < BOARD_HEIGHT; i++) {
        board[i][0] = '#';
        board[i][BOARD_WIDTH - 1] = '#';
    }

    for (int j = 0; j < BOARD_WIDTH; j++) {
        board[0][j] = '#';
        board[BOARD_HEIGHT - 1][j] = '#';
    }
}

// Board::Board(unsigned _BOARD_HEIGHT,unsigned _BOARD_WIDTH)
// {
// BOARD_HEIGHT = _BOARD_HEIGHT;
// BOARD_WIDTH = _BOARD_WIDTH;
// }
