# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
#
# Examples:
#
# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']


def solution(s: str):
    res = []
    len_str = len(s)

    for i in range(1, len_str, 2):
        res.append(s[i - 1 : i + 1])

    if len_str % 2 != 0:
        res.append(f"{s[-1]}_")

    return res


print(solution("abc"))  # ['ab', 'c_']
print(solution("abcdef"))  # ['ab', 'cd', 'ef']
print(solution("a"))  # ['a_']
print(solution(""))  # []
