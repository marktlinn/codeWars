#include <map>
#include <string>

char trilingual_democracy(const std::string &group) {
  bool only_one = false;
  std::map<char, int> langs{
      {'F', 0},
      {'D', 0},
      {'I', 0},
      {'K', 0},
  };

  for (char c : group) {
    langs[c]++;

    if (langs[c] == 3) {
      return c;
    }
    if (langs[c] == 2) {
      only_one = true;
    }
  }

  for (const auto &pair : langs) {
    if (only_one && langs[pair.first] == 1) {
      return pair.first;
    }
    if (!only_one && pair.second == 0) {
      return pair.first;
    }
  }

  return '?';
}

int main() {
  /*trilingual_democracy("FFF");*/
  trilingual_democracy("IIK");

  return 0;
}
