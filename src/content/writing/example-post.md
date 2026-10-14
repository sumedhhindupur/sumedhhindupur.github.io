---
title: "Example post: delete or rename me"
date: 2026-10-14
category: research
description: A template showing headings, math, a figure and code.
draft: true
---

This post is a **draft**, so it only shows up while running `npm run dev`. Copy this file to start a new post, set `draft: false`, and pick `category: research` or `category: personal`.

## Math

Inline math like $\mathbf{h} = W\mathbf{x} + \mathbf{b}$ works, and so do display equations:

$$
I(N) \propto N^{\alpha}, \qquad 0 < \alpha < 1.
$$

## Figures

Put images or videos in `public/media/` and reference them like this:

<figure>
  <div style="aspect-ratio:16/9;background:#f6f6f5;border-radius:6px"></div>
  <figcaption>Figure 1. A caption goes here.</figcaption>
</figure>

## Code

```python
import torch
acts = model(x, output_hidden_states=True).hidden_states[12]
```
