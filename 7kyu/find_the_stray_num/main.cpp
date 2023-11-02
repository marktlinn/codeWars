/*
Link:
https://www.codewars.com/kata/57f609022f4d534f05000024/train/cpp
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

#include <vector>
#include <unordered_map>

int stray(std::vector<int> numbers) {
    std::unordered_map<int, int> map;
    for(int i: numbers){
        if(map.find(i) != map.end()){
            map[i]++;
            if(map.size()>1){
                break;
            }
        } else {
            map[i] = 1;
        }
    }
    for(auto i: map){
        if(i.second == 1){
            return i.first;
        }
    }
    return 0;
};
