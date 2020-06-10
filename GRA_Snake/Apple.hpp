#pragma once
#include "Snake.hpp"
class Apple {
public:
    static const int BOARD_HEIGHT = 10;
    static const int BOARD_WIDTH = 20;
    int appleY;
    int appleX;
    void plantApple(Snake snake);
    void eatApple(Snake& snake);
    //Apple(const unsigned _BOARD_HEIGHT,const unsigned _BOARD_WIDTH);
};
