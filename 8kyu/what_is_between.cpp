#include <vector>

std::vector<int> between(int start, int end) {
    std::vector<int> list;
    for(int i = start; i <= end; i++){
        list.push_back(i);
    }
    return list;
}  

