/*
Link:
https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/cpp
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

sortNumbers({1, 2, 10, 50, 5}) // sholud return {1, 2, 5, 10, 50}
sortNumbers({}) // should return {}
*/


#include <vector>
#include <algorithm>
#include <iostream>

std::vector<int> solution(std::vector<int> nums) {
  if(nums.size() == 0){
    return std::vector<int>{};
  }
  std::sort(nums.begin(), nums.end());
  return nums;
}

int main() {
  std::vector<int> res1 = solution(std::vector<int>{0});
  for(int i: res1){
    std::cout << i << std::endl;
  }
  
  return 0; 
}