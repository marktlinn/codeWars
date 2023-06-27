"""
Link: https://www.codewars.com/kata/56d93f249c844788bc000002/train/python
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!


test.describe("testit")

test.it("works for some examples")
test.assert_equals(testit(""), "")
test.assert_equals(testit("a"), "A")
test.assert_equals(testit("b"), "B")
test.assert_equals(testit("a a"), "A A")
test.assert_equals(testit("a b"), "A B")
test.assert_equals(testit("a b c"), "A B C")
"""


def testit(s):
    return s.upper()
