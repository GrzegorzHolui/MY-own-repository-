cmake_minimum_required(VERSION 3.10)

project(CmakePrzyklad)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Werror")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pedantic")

set(LIBRARY_OUTPUT_PATH build/)
set(BINARY_OUTPUT_PATH build/)
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/bin)
include(External_GTest.cmake)

# SRC
include_directories(Include)
include_directories(Test)

add_executable(bakcyl_programowania  "Source/list.cpp" "main.cpp")

 target_link_libraries(bakcyl_programowania 	${GTEST_MAIN_LIBRARY}
                                                 ${GTEST_LIBRARY}
                                                 ${GMOCK_MAIN_LIBRARY}
                                                 ${GMOCK_LIBRARY})

add_executable(bakcyl_programowania_UT "Test/test.cpp" "test.cpp" )
target_link_libraries(bakcyl_programowania_UT 	${GTEST_MAIN_LIBRARY}
                                       		${GTEST_LIBRARY}
                                       		${GMOCK_MAIN_LIBRARY}
                                       		${GMOCK_LIBRARY})


