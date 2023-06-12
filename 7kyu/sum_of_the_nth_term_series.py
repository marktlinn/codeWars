"""
Link: https://www.codewars.com/kata/555eded1ad94b00403000071/train/python
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

###Pseudcode###
if n is zero just return the "0.00" string
else init sum and denominator as 1 and 0 respectively
iterate from 0 to n
  increment sum by the value of 1/denominator
  increment denomiator by three
return the sum formatted as strings with two decimals.

"""


def series_sum(n):
    if n == 0:
        return "{:.2f}".format(n)
    sum = 0
    denominator = 1
    for i in range(n):
        sum += 1/denominator
        denominator += 3
    return "{:.2f}".format(sum)


print(series_sum(0))
print(series_sum(1))
print(series_sum(2))
print(series_sum(3))
