#pragma once
#include <deque>
#include <string>
#include <iostream>
class Snake
{
public:
    static const int BOARD_HEIGHT = 10;
    static const int BOARD_WIDTH = 20;
    //konstruktor
    unsigned SnakeY = 5;
    unsigned SnakeX = 10;
    std::deque<char> tail {'S'};
    void move(std::string t);
    void checkBorder();
    void printSnake();
};
