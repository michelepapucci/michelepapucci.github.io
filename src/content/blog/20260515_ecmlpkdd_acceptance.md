---
title: "Paper Accepted at ECML PKDD 2026"
description: "Our paper \"What Intermediate Layers Know: Detecting Jailbreaks from Entropy Dynamics\" has been accepted at ECML PKDD 2026 in Naples! A preprint is already available on arXiv. We show that how a model's predictive entropy evolves across its intermediate layers reveals jailbreak attempts, with no training required."
pubDate: "Jun 23 2026"
heroImage: "/pictures/entropy-jailbreak.png"
tags: ["Papers"]
---

I am happy to announce that our paper "What Intermediate Layers Know: Detecting Jailbreaks from Entropy Dynamics" has been accepted at [ECML PKDD 2026](https://ecmlpkdd.org/2026/), which will take place in Naples, Italy, on September 7–11. This is joint work with collegues from the University of Oxford and LMU Munich. 

The paper asks a simple question: where inside a language model does harmful intent actually show up? Rather than filtering prompts or inspecting outputs, we take a training-free look at the model's own uncertainty. Using the logit lens, we read the token-level predictive entropy at each intermediate layer of a frozen LLM and study how it evolves as the prompt unfolds.

The key finding is that the useful signal is *dynamic*, not static. Aggregate statistics like the mean or variance of entropy carry little discriminative power, but features that capture *how* entropy trends across token positions, rank-based monotonicity measures such as Kendall's $\tau$ cleanly separate jailbreak prompts from benign ones. Even more interesting, this signal is concentrated in the intermediate layers and fades at the final layer, suggesting that jailbreak-relevant structure lives in mid-network representations before output-specific processing partly washes it away.

We see this pattern hold consistently across Llama, Qwen, and Gemma, and across the AdvBench, HarmBench, and StrongREJECT benchmarks, **all without any additional training or threshold tuning**.

A preprint is already available on [arXiv](https://arxiv.org/abs/2606.25182), and the code, experiment configs, and supplementary material are freely available as an open-source project on [GitHub](https://github.com/ssophiee/entropy-jailbreak-detection).