"""
https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/python
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
"""

def smaller(arr):
    result = []
    
    for i in range(len(arr)):
        count = 0
        for j in range(i+1, len(arr)):
            if arr[j] < arr[i]:
                count += 1
        result.append(count)
    return result

