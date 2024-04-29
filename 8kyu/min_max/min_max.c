#include <stdbool.h>
#include <stdio.h>
// Your task is to make two functions ( max and min, or maximum and minimum,
// etc., depending on the language ) that receive a list of integers as input,
// and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

bool arrayHasItems(int arrayLength) {
  if (arrayLength < 1) {
    return false;
  }
  return true;
}

int min(int *array, int arrayLength) {
  if (!arrayHasItems(arrayLength)) {
    return 0;
  }
  int minFound = array[0];

  for (int i = 1; i < arrayLength; i++) {
    if (array[i] < minFound) {
      minFound = array[i];
    }
  }

  return minFound;
}

int max(int *array, int arrayLength) {
  if (!arrayHasItems(arrayLength)) {
    return 0;
  }

  int maxFound = array[0];

  for (int i = 1; i < arrayLength; i++) {
    if (array[i] > maxFound) {
      maxFound = array[i];
    }
  }
  return maxFound;
}

int main() {

  int input1[8] = {4, 6,  2,    1,
                   9, 63, -134, 566}; //         -> max = 566, min = -134
  int input2[7] = {-52, 56, 30, 29, -54, 0, -110}; // -> min = -110, max = 56
  int output1Max = max(input1, 8);
  int output1Min = min(input1, 8);

  int output2Max = max(input2, 7);
  int output2Min = min(input2, 7);

  printf("max1: %d\n", output1Max);
  printf("min1: %d\n", output1Min);
  printf("max2: %d\n", output2Max);
  printf("min2: %d\n", output2Min);

  return 0;
}
