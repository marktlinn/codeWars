"""
Link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/python
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

"""
"""
### Pseudocode ###
The pattern on closer inspection is just cubed numbers:
if n is 2 the result is 8: 2 ** 3 = 8
if n is 3 the result should be 27: 3 ** 3 = 27
So, to solve this in constant time we can simply return the cube of n

"""
def row_sum_odd_numbers(n):  
    return n **3


print(row_sum_odd_numbers(2)) # 8
print(row_sum_odd_numbers(3)) # 27
print(row_sum_odd_numbers(4)) # 64

