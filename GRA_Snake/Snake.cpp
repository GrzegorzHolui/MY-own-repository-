#include "Snake.hpp"

void Snake::move(std::string t)
{
    if (t == "w") {
        SnakeY -= 1;
    }
    else if (t == "s") {
        SnakeY += 1;
    }
    else if (t == "a") {
        SnakeX -= 1;
    }
    else if (t == "d") {
        SnakeX += 1;
    }
    std::cout <<"\033c";
    //system("cls");
}

void Snake::checkBorder()
{
    if (SnakeX == 0) {
        SnakeX = BOARD_WIDTH;
    }
    else if (SnakeX == BOARD_WIDTH)
    {
        SnakeX = 0;
    }

    if (SnakeY == 0) {
        SnakeY = BOARD_HEIGHT;
    }
    else if (SnakeY == BOARD_HEIGHT)
    {
        SnakeY = 0;
    }

}

void Snake::printSnake()
{
    for (auto& x : tail) {
        std::cout << x;
    }
}
