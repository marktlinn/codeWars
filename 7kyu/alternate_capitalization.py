"""
https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:
"""


# def capitalize(s):
#     result = []
#     word = ""
#     condition = "even"
#     while len(result) <= 1:
#         if condition == "odd":
#             for i, let in enumerate(s):
#                 if i % 2 != 0:
#                     word += let.upper()
#                 else:
#                     word += let
#         else:
#             for i, let in enumerate(s):
#                 if i % 2 == 0:
#                     word += let.upper()
#                 else:
#                     word += let
#             condition = "odd"
#         result.append(word)
#         word = ""
#     return result

def capitalize(s):
    first_string = ''.join(let.upper() if i %
                           2 == 0 else let for i, let in enumerate(s))
    return [first_string, first_string.swapcase()]


print(capitalize("abcdef"))  # ,['AbCdEf', 'aBcDeF']
