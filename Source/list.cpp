#ifndef LIST_CPP
#define LIST_CPP
#include "list.hpp"
#include <iostream>

template<typename T>
List<T>::Node::Node(T value) : data(value)
{
  next = NULL;
}

template<typename T>
List<T>::List() :  start(NULL) {}

template<typename T>
void List<T>::print()
{
  Node* traverse = start;
  std::cout<<traverse->data<<" ";
  while(traverse -> next != NULL)
  {
    traverse = traverse -> next;
    std::cout<<traverse->data<<" ";
  }
  std::cout<<std::endl;
}

template<typename T>
void List<T>::push_back(T data)
{
  if(start == NULL)
  {
    start = new Node(data);
  }
  else
  {
    Node* traverse = start;
    while(traverse -> next != NULL)
    {
       traverse = traverse -> next;
    }
    Node* n = new Node(data);
    traverse->next = n;
  }
}

template<typename T>
uint List<T>::size ()
{
  int length = 0;
  Node* traverse = start;
  length++;
  while(traverse -> next != NULL)
  {
    length++;
    traverse = traverse -> next;
  }
  return length;
}
#endif
