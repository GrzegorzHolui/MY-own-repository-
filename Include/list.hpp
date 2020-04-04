#pragma once
#include <cstdlib>

template<typename T>
struct List
{
  struct Node
  {
    T data;
    Node* next;
    Node(T value);
  };

  Node* start;
  List();
  void print();
  void push_back(T data);
  uint size();
};

#include "list.cpp"
