---
usemathjax: true
title: "Brilliant.org: Euler's Totient Function"
date: 2020-06-08 17:30:20 +0300
description: A brief pass at Euler's Totient Function
tag: ['Math','Modular Arithmetic']
---
Number theory is a very interesting field of mathematics I've only recently became interested in. This week it looks like Euler's Totient Function will be the topic, as always you can follow along at the [wiki](https://brilliant.org/wiki/eulers-totient-function/). Euler's Totient Functions (also called the Phi function) counts the number of positive integers less than $$n$$ that are coprime to $$n$$. Coprime is just a way of saying that any pair of two numbers only share 1 as their greated common divisor.

For example:\\
$$25 = 5^2$$ and $$25(1)$$\\
$$9 = 3^2$$ and $$9(1)$$

The only common divisor between $$25$$ and $$9$$ is $$1$$. Thus, $$25$$ and $$9$$ are coprime to each other. The shorthand formula to express the count of coprime numbers up to $$n$$ is $$\phi(n)$$, which is the number of $$m \in\mathbb{N}$$ such that $$1\leq m < n$$ and $$gcd(m,n) = 1$$.

### Why is this important?
If you're interested in building a cryptosystem you would be interested in this function. In fact, most cryptography is built on some form of number theory using modular arithemtic and very __very__ large numbers. The essence of this boils down to private and public keys, and knowing the solution $$\phi(n)$$ allows one to break this code and get the private key, following RSA encruption.

### Example

Let's find $$\phi(15)$$


```python
# multiples of a number are numbers that leave remainder 0
for i in range(15):
    i += 1
    remainder = 15 % i
    if remainder == 0:
        print(f"{i} has remainder {remainder}")
```

    1 has remainder 0
    3 has remainder 0
    5 has remainder 0
    15 has remainder 0
    

We have 4 numbers that contain a remainder of $$0: 1, 3, 5,$$ and $$15$$. We can ignore $$1$$ and $$15$$ since $$1$$ is divisable by all numbers. Let's rewrite the equation to remove $$1$$ and $$15$$, and all future instances of that.


```python
# multiples of a number are numbers that leave remainder 0, now removing 1 and the last number
num = 15

for i in range(2, num - 1):
    remainder = 15 % i
    if remainder == 0:
        print(f"{i} has remainder {remainder}")
```

    3 has remainder 0
    5 has remainder 0
    

Perfect, now that we know which numbers are multiples of $$15$$ we need to eliminate all their multiples up to $$15$$. Remember, $$\phi(n)$$ counts all coprime numbers up to $$n$$. We remove all multiples because those multiples are not coprime to $$15$$. As an example, $$10$$ equals $$5(2)$$ and $$1(10)$$, $$15$$ is a mutliple of $$5$$. Since we're only interested in coprime numbers $$10$$ does not make the cut, but $$14$$ would. $$14$$ is a made up of two prime numbers $$7$$ and $$2$$. Both those numbers are not multiples of $$15$$ so $$14$$ counts and so does $$2$$ and $$7$$.

To start, imagine $$m$$ as a coprime number to $$n$$. The count of all the $$m$$s is going to be less than the range of $$n$$. Which is represented by the inequality above: the number of $$m \in\mathbb{N}$$ such that $$1\leq m < n$$. Once we get all the $$m$$s we can take the whole range of $$n$$ and subtract the range of $$m$$.


```python
%%timeit
num = 15
divisors = [] # create a list of all the divisors of n
remove_numbers = [] # append all mutliples of the divisors of n to an emptry list

for i in range(2, num - 1):
    remainder = 15 % i
    if remainder == 0:
        divisors.append(i)
        
for div in divisors:
    for i in range(2, num - 1):
        remainder = i % div
        if remainder == 0:
            remove_numbers.append(i)
```

    2.53 µs ± 75.2 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)
    


```python
numbers_to_n = list(range(1, num))
f'The number of coprime numbers from 1-n, solving ϕ(n): {len(set(numbers_to_n) - set(remove_numbers))}'
```




    'The number of coprime numbers from 1-n, solving ϕ(n): 8'



This solved the equation and it's relatively fast but it won't scale. If we needed to run this on really large numbers this would take a while. For example, let's change the number to something 1,000 times greater and see what the run time is.


```python
%%timeit
num = (15*1001)
divisors = [] # create a list of all the divisors of n
remove_numbers = [] # append all mutliples of the divisors of n to an emptry list


for i in range(2, num - 1):
    remainder = 15 % i
    if remainder == 0:
        divisors.append(i)
        
for div in divisors:
    for i in range(2, num - 1):
        remainder = i % div
        if remainder == 0:
            remove_numbers.append(i)
```

    2.86 ms ± 49.7 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)
    

The runtime for this is 2.86 ms which is roughly 1,000 times that of the 2.51 $$\mu$$s. I suspect at best they scale linearly, the larger the prime the slower it will run. Luckly, a lot of this math is already worked for us. The [SymPy](https://www.sympy.org/en/index.html) package takes care of a lot of the heavy lifting for getting the totient.


```python
from sympy.ntheory import totient
```


```python
%%timeit
totient(15*1001)
```

    227 ns ± 4.25 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)
    

Wow! That was a million times faster than the equation I ran before. This would definitely scale much better. But how does SymPy have such a fast equation? A part of the answer is what I wrote was brute force, required holding memory of each multiplicative, and each number up to $$n$$. But more importantly, I'm not running the best equation to figure something like this out. It's much faster to find some factors of $$n$$ such that $$n = ab$$, where the $$\gcd(a,b) = 1$$ (indicating these are two coprime numbers). That is not a trival ask, and makes light of how difficult it can be to find. But for this theorum, the problem is now broken down into a much easier set of numbers. Since $$ab = n$$, if we find all the prime multiplicatives of $$a$$ we have found prime numbers between 1 and $$n$$, same goes for $$b$$. And, since $$a$$ can be large if $$n$$ is large, we can simplify our notation and make it more general, like's call it $$p^k$$ where $$p$$ is some prime number raised to the power of $$k$$, which equals $$a$$. Heres an example:

$$5^{2} = 25$$

$$25$$ ($$a$$) is made up of two numbers multiplied by each other, specifically $$5$$ ($$b$$). Thus $$25$$ equals $$5$$ raised to the power of $$2$$ ($$k$$). 

Sticking with that example, since $$25$$ is coprime $$b$$ (remember statisfying $$\gcd(25,b) = 1$$) that means all of $$a$$'s multiplicatives statisfy this requirement, $$5^{1}, 5^{2}, 5^{3}..., 5^{k}$$. However, the formal range only needs to extend up to $$a$$, $$[1,p^{k}]$$, where $$p^{k}$$ in our example is $$25$$. There is a formula that generalizes this more and we're going to use it:

$$\phi(p^{k}) = p^{(k - 1)}(p - 1)$$

[Proof](https://en.wikipedia.org/wiki/Euler%27s_totient_function): since $$p$$ is a prime number the only possible values of $$\gcd(p^k, b)$$ are $$1, p, p^2, ..., p^k$$, and the only way for $$\gcd(p^k, b)$$ to not equal 1 is for $$b$$ to be a multiple of $$p$$. The multiples of $$p$$ that are less than or equal to $$p^k$$ are $$p, 2p, 3p, ..., p^{k − 1}p = p^k$$, and there are $$p^{k − 1}$$ of them. Therefore, the other $$p^k − p^{(k − 1)}$$ numbers are all relatively prime to $$p^k$$.

There's one more detail that we need to put this all together. Since the totient is multiplicative, $$ab = n$$, we can multiply the counts of primes from $$a$$ and $$b$$. Since $$a$$ and $$b$$ have a $$\gcd(a,b) = 1$$ each prime composing $$a$$ or $$b$$ is unique. Thus, all $$ab$$ pairings, these respective primes multiplied by each other, are unique to $$n$$ and produce a coprime to $$n$$. Again, this is not a trival fact but it's very powerful. 


```python
from sympy.ntheory.factor_ import factorint
```


```python
factors = factorint(15*1001)
factors
```




    {3: 1, 5: 1, 7: 1, 11: 1, 13: 1}




```python
%%timeit
t = 1
for p, k in factors.items():
    t *= (p - 1) * p**(k-1)
```

    588 ns ± 5.29 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)
    

I used SymPy's factorint function to get the factors for $$n$$. Then I applied SymPy's formula for finding all the primes factors of $$n$$. For example, $$3$$ is a factor of $$15(1001)$$. Looping through each factor and it's power, multiplying $$t$$ each time it passes, produces the correct number of primes from $$1$$ to $$n$$. This is the same equation SymPy uses. It's still slightly slower than the original SymPy function but it's still significantly faster than the original, around a million times.
