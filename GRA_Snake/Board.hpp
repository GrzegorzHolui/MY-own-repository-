#pragma once
#include <array>
#include "Apple.hpp"
#include "Snake.hpp"
class Board {
public:
     static const int BOARD_HEIGHT = 10;
     static const int BOARD_WIDTH = 20;
    //konstruktor
    typedef std::array<std::array<char, BOARD_WIDTH>, BOARD_HEIGHT> GameBoardArray;
    void printBoard(Snake snake, Apple apple);
    void initializeBoard();
   // Board( unsigned _BOARD_HEIGHT, unsigned _BOARD_WIDTH);
private:
    void makeFrame();
    GameBoardArray board;
};
