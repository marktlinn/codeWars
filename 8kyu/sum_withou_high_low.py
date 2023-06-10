"""
link:
https://www.codewars.com/kata/576b93db1129fcf2200001e6/python
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
  Example
  { 6, 2, 1, 8, 10 } => 16
  { 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
"""

# def sum_array(arr):
#   sum = 0
#   if arr:
#     min_max_indices = (arr.index(min(arr)), arr.index(max(arr)))
#     for i,num in enumerate(arr):
#       if i not in min_max_indices:
#         sum += num
#   return sum

def sum_array(arr):
  ttl = 0
  if arr:
    min_max_indices = (arr.index(min(arr)), arr.index(max(arr)))
    ttl = sum(num for i,num in enumerate(arr) if i not in min_max_indices)
  return ttl


print(sum_array([1,2,3,4,5,5]))
print(sum_array([None]))
print(sum_array([]))
print(sum_array([7]))