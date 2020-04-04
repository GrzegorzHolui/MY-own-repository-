#include <gtest/gtest.h>
#include "list.hpp"
#include <iostream>


using namespace ::testing;

TEST(list_size_TEST, result_of_size){
  List<std::string> list;
  list.push_back("XD");
  list.push_back("69");
  list.push_back("420");
  list.print();

  ASSERT_EQ(list.size(),3);
}
