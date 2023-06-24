"""
Link:
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/python
Let us consider this example (array written in general format):
  ls = [0, 1, 3, 6, 10]
Its following parts:
  ls = [0, 1, 3, 6, 10]
  ls = [1, 3, 6, 10]
  ls = [3, 6, 10]
  ls = [6, 10]
  ls = [10]
  ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
Other Examples:
  ls = [1, 2, 3, 4, 5, 6] 
  parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
  ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
  parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
"""

"""
#-> pseudocode <-#
First less efifcient solution:
  Create an empty list
  iterate over the list for each item take a slice of the list from that index until the end and append the sum of that slice to the empty list
  return the empty list
  ### quadratic complexity  ###

Second more efficient solution
  Create a list with a predetermined number of elements:
  take the length of ls and fill the list with 0 to that length
  loop through the result array starting from the length of ls -1 (to leave the 0 at the end)
    make result[i] = ls at current index plus result at next index
  return the result
  ### linear time complexity ###
"""


# second solution -> quadratic complexity
def parts_sums(ls):
    length = len(ls)
    result = [0] * (length + 1)
    for i in range(length - 1, -1, -1):
        result[i] = ls[i] + result[i+1]
    return result


print(parts_sums([]))  # , [0]
print(parts_sums([0, 1, 3, 6, 10]))  # , [20, 20, 19, 16, 10, 0]
print(parts_sums([1, 2, 3, 4, 5, 6]))  # , [21, 20, 18, 15, 11, 6, 0]
