#include "Apple.hpp"
void Apple::plantApple(Snake snake)
{
    srand(time(NULL));
    appleX = rand() % (BOARD_WIDTH - 2) + 1;
    appleY = rand() % (BOARD_HEIGHT - 2) + 1;
    if (appleX == snake.SnakeX && appleY == snake.SnakeY) {
        plantApple(snake);
    }
}
void Apple::eatApple(Snake& snake)
{
    if (appleX == snake.SnakeX && appleY == snake.SnakeY) {
        snake.tail.push_back('s');
    }
}

// Apple::Apple(const unsigned _BOARD_HEIGHT, const unsigned _BOARD_WIDTH)
// :BOARD_HEIGHT(_BOARD_HEIGHT),BOARD_WIDTH(_BOARD_WIDTH)
// {

// }
