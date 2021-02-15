function isDivisibleBy(n, m) {
    if (!(m <= 0) && !(m & (m - 1))) {
        return (n & (m - 1)) === 0;
    } else {
        return n % m === 0;
    }
}
