def narcissistic(value: int):
    val_str = str(value)
    n = len(val_str)
    res = 0

    if n:
        for i in range(n):
            res += int(val_str[i]) ** n

    return res == int(value)
