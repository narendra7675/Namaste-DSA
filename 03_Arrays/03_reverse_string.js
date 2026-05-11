/**
 * # Reverse String

## Problem Statement

Write a function that reverses a string.

The input string is given as an array of characters `s`.

You must modify the input array **in-place** using `O(1)` extra memory.

---

## Example 1

```js
Input: s = ['h', 'e', 'l', 'l', 'o']

Output: ['o', 'l', 'l', 'e', 'h']
```

---

## Example 2

```js
Input: s = ['H', 'a', 'n', 'n', 'a', 'h']

Output: ['h', 'a', 'n', 'n', 'a', 'H']
```

---

## Constraints

```js
1 <= s.length <= 10^5
s[i] is a printable ASCII character
```

---

# Intuition

To reverse the string:

- First character should swap with the last character
- Second character should swap with the second-last character
- Continue until reaching the middle of the array

Example:

```js
['a', 'k', 's', 'h', 'a', 'y']

Swap:
0 ↔ 5
1 ↔ 4
2 ↔ 3
```

Result:

```js
['y', 'a', 'h', 's', 'k', 'a']
```

---

# Key Formula

For every index `i`:

```js
swap(i, n - 1 - i)
```

Where:

- `i` → current index
- `n` → array length
- `n - 1 - i` → opposite index from the end

---

# Dry Run

## Input

```js
s = ['h', 'e', 'l', 'l', 'o']
n = 5
```

We only run the loop until:

```js
Math.floor(n / 2) = 2
```

| i | n - 1 - i | Swap |
|---|---|---|
| 0 | 4 | h ↔ o |
| 1 | 3 | e ↔ l |

Final Output:

```js
['o', 'l', 'l', 'e', 'h']
```

---

# How Swapping Works

Suppose:

```js
a = 10
b = 20
```

After swapping:

```js
a = 20
b = 10
```

Using a temporary variable:

```js
temp = a
a = b
b = temp
```

---
var reverseString = function(s) {

    let n = s.length;

    for(let i = 0; i < Math.floor(n / 2); i++) {

        let temp = s[i];

        s[i] = s[n - 1 - i];

        s[n - 1 - i] = temp;
    }
};
```

---

# Step-by-Step Explanation

## Step 1: Find array length

```js
let n = s.length;
```

---

## Step 2: Run loop only for half of the array

```js
for(let i = 0; i < Math.floor(n / 2); i++)
```

Why only half?

Because swapping both halves completely would undo the reverse.

---

## Step 3: Store current value temporarily

```js
let temp = s[i];
```

---

## Step 4: Replace current value with opposite value

```js
s[i] = s[n - 1 - i];
```

---

## Step 5: Put stored value in opposite position

```js
s[n - 1 - i] = temp;
```

---

# Time and Space Complexity

## Time Complexity

```js
O(n)
```

We traverse half of the array.

---

## Space Complexity

```js
O(1)
```

No extra array is used.

---

# Interview Summary

- Use the two-pointer swapping approach
- Swap:

```js
i ↔ n - 1 - i
```

- Traverse only until `n / 2`
- Modify array in-place
- Best solution for this problem because it uses:
  - `O(n)` time
  - `O(1)` space
 

/**
 * @param {Character[]} s
 * @return {void} Do not return anything, modify s in-place instead
 */

var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    //swapping s[i], s[n-1-i]
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
