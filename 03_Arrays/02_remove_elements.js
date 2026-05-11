/**
 * # Remove Element

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place. The order of elements may change.

Return the number of elements that are not equal to `val`.

The first `k` elements of `nums` should contain the remaining elements, where `k` is the returned value.

---

## Example 1

### Input

```javascript
nums = [3,2,2,3]
val = 3
```

### Output

```javascript
2
```

### Updated Array

```javascript
[2,2,_,_]
```

---

## Example 2

### Input

```javascript
nums = [0,1,2,2,3,0,4,2]
val = 2
```

### Output

```javascript
5
```

### Updated Array

```javascript
[0,1,3,0,4,_,_,_]
```

---

# Approach

We use the Two Pointer Technique.

- `p` → Traverses the array
- `x` → Stores the position where the next valid element should be placed

Whenever the current element is not equal to `val`, copy it to position `x` and increment `x`.

At the end:

- First `x` elements contain valid numbers
- `x` is the answer

---

# Dry Run

## Input

```javascript
nums = [3,2,1,5,3,4,8,3]
val = 3
```

---

## Initial State

```javascript
x = 0
```

---

## Step-by-Step Execution

| p | nums[p] | Condition | Action | Array State | x |
|---|---|---|---|---|---|
| 0 | 3 | 3 != 3 ❌ | Skip | [] | 0 |
| 1 | 2 | 2 != 3 ✅ | nums[0] = 2 | [2] | 1 |
| 2 | 1 | 1 != 3 ✅ | nums[1] = 1 | [2,1] | 2 |
| 3 | 5 | 5 != 3 ✅ | nums[2] = 5 | [2,1,5] | 3 |
| 4 | 3 | 3 != 3 ❌ | Skip | [2,1,5] | 3 |
| 5 | 4 | 4 != 3 ✅ | nums[3] = 4 | [2,1,5,4] | 4 |
| 6 | 8 | 8 != 3 ✅ | nums[4] = 8 | [2,1,5,4,8] | 5 |
| 7 | 3 | 3 != 3 ❌ | Skip | [2,1,5,4,8] | 5 |

---

# Final Output

```javascript
[2,1,5,4,8]
```

Return:

```javascript
5
```

---

# JavaScript Solution

```javascript
function removeElement(nums, val) {

    let x = 0;

    for (let p = 0; p < nums.length; p++) {

        if (nums[p] !== val) {

            nums[x] = nums[p];
            x++;
        }
    }

    return x;
}
```

---

# Time Complexity

```text
O(n)
```

We traverse the array only once.

---

# Space Complexity

```text
O(1)
```

No extra array is used.

---

# Key Interview Points

- Uses Two Pointer Technique
- In-place array modification
- Optimized solution with constant space
- Order preservation is optional
- Very common coding interview problem
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //shift elements to left if it not equal to val
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};
