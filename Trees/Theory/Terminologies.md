Sure! Here's a clear explanation of common **tree terminology** in data structures:

---

### 🌳 Tree Terminology

---

#### **1. Root**

- The **topmost** node of the tree.
- The only node without a parent.
- Every tree has exactly **one root**.

✅ Example: In this tree, `A` is the root.

```
     A
    / \
   B   C
```

---

#### **2. Node**

- A **single element** in the tree.
- It can contain data and may have child nodes.

✅ Example: In the tree above, `A`, `B`, and `C` are all nodes.

---

#### **3. Parent**

- A node that has **one or more children**.

✅ Example: `A` is the parent of `B` and `C`.

---

#### **4. Child**

- A node that **descends from another node**.

✅ Example: `B` and `C` are children of `A`.

---

#### **5. Leaf**

- A node that has **no children** (also called external nodes).

✅ Example: In the tree above, `B` and `C` are leaves.

---

#### **6. Sibling**

- Nodes that **share the same parent**.

✅ Example: `B` and `C` are siblings because their parent is `A`.

---

#### **7. Ancestor**

- Any node along the path **from a node to the root**.

✅ Example: In this tree:

```
     A
    /
   B
  /
 C
```

- `A` is an ancestor of `B` and `C`.
- `B` is an ancestor of `C`.

---

#### **8. Descendant**

- Any node that can be **reached from a node downward**.

✅ Example: In the tree above:

- `C` is a descendant of `B` and `A`.

---

Sure, let’s go step by step with a clear diagram and examples.

---

### 🧠 Tree Example

```
        A
       / \
      B   C
     / \
    D   E
       /
      F
```

---

### ✅ 9. **Height of a Node**

> **Definition**: The height of a node is the **number of edges on the longest path** from that node **down to a leaf**.

Let’s calculate for a few nodes:

- **Node F**:

  - F is a **leaf**, so height = 0

- **Node E**:

  - Longest path: E → F → (leaf)
  - height = 1 edge

- **Node B**:

  - Two children: D (leaf) and E (whose longest path is E → F)
  - Longest path: B → E → F
  - height = 2 edges

- **Node A (Root)**:

  - Longest path: A → B → E → F
  - height = 3 edges

---

### ✅ 10. **Height of the Tree**

> **Definition**: The height of the **tree** is the height of the **root node**.

- In our example, the root is **A**, and its longest path to a leaf is:

  - A → B → E → F

- So, **Height of the Tree = 3**

---

### ✅ 11. **Depth of a Node**

> **Definition**: The depth of a node is the **number of edges from the root** to that node.

Let’s calculate:

- **A (root)** → depth = 0
- **B and C** → depth = 1 (one edge from A)
- **D and E** → depth = 2
- **F** → depth = 3 (A → B → E → F = 3 edges)

---

### ✅ 12. **Subtree**

> **Definition**: A subtree is the **entire tree starting from any node**, including all its descendants.

🔍 Example:

- Subtree of **B**:

```
      B
     / \
    D   E
       /
      F
```

- Subtree of **E**:

```
    E
   /
  F
```

Each subtree is itself a valid tree.

---
