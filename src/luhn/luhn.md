# Hans Luhn's Algorithm

## Description

The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers and Greek Social Security Numbers (ΑΜΚΑ). It was created by IBM scientist Hans Peter Luhn and described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960.

The algorithm is in the public domain and is in wide use today. It is specified in ISO/IEC 7812-1.[1] It is not intended to be a cryptographically secure hash function; it was designed to protect against accidental errors, not malicious attacks. Most credit cards and many government identification numbers use the algorithm as a simple method of distinguishing valid numbers from mistyped or otherwise incorrect numbers.

## The Algorithm

1. Starting from the **right**, double every digit which has an **even** numbered index
1. If any of the doubled digits has a value **greater than 9**, split the digits and add them together e.g. `5*5==10` becomes `1+0==1`
1. Starting from the **right**, add together all of the **odd** numbered indexed values
1. Add together **both** of the totals (odd total + even total) to get a `total`
1. Grab the `checksum` digit (the **last** digit of the number)
1. Compare the last digit of the `total` to the `checksum` digit, if they match, it is a **valid Luhn number**

## Bibliography

- Description taken from Wikipedia (https://en.wikipedia.org/wiki/Luhn_algorithm)
