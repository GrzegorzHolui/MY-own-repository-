#include <iostream>
#include "list.hpp"

int main()
{
  List<std::string> list;
  list.push_back("XD");
  list.push_back("69");
  list.push_back("420");
  list.print();
  //std::cout<<std::endl <<"Size: " <<list.size()<<std::endl;
  return 0;
}
