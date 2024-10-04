---
title: "New Paper Accepted at NL4AI"
description: "My latest paper \"Fantastic Labels and Where to Find Them: Attention-Based Label Selection for Text-to-Text Classification\" has been accepted at the 8th Workshop on Natural Language for Artificial Intelligence co-located with AixIA 2024."
pubDate: "Oct 04 2024"
heroImage: "/pictures/fantastic_labels.png"
tags: ["Papers"]
---

I and my colleagues just had the news that our latest paper "Fantastic Labels and Where to Find Them: Attention-Based Label Selection for Text-to-Text Classification" got accepted at the 8th Workshop on Natural Language for Artificial Intelligence co-located with AixIA 2024.

This is our latest work in the **Label Representation** studies we've been conducting. We started some years ago, with our first paper [Evaluating Text-to-Text Framework for Topic and Style Classification of Italian Text](http://sag.art.uniroma2.it/NL4AI/wp-content/uploads/2022/11/paper8.pdf) we tried using IT5, an encoder-decoder model, as a classifier.
There we first asked ourselves if the way we choose output representation (i.e. what the model needs to generate to classify a certain input as a certain class) had any impact on the model's performance.

We answered that with a strong yes in our following work [Lost in Labels: An Ongoing Quest to Optimize Text-to-Text Label Selection for Classification](https://ceur-ws.org/Vol-3596/paper39.pdf). Here, we found out that different output representations can help or hinder the performance of the model, especially so for the Topic Classification task we tested. 

We hypothesized that the model uses *lexical clues* from the input to discriminate between the set of topics. So, having a lexically related output as your target word to generate could help the model's performance.

In our latest work, we continued this line of study, trying to find a reliable way to choose a good set of label representations. We tried an approach based on [Value Zeroing](https://arxiv.org/abs/2301.12971) (Mohebbi et al., 2023), which is an interpretability technique that assesses the *saliency* of a token in the construction of the vectorial representation of the other tokens in the Self-Attention layer of a Transformer model. 

We modified an IT5 infrastructure to calculate Value Zeroing scores for all the tokens in the input with respect to a subset of tokens of the same text. We tested various ways of choosing the optimal subset of tokens to look at. In the end, we found that looking at which tokens were the *most salient* for the construction of the End-of-Sentece token \</s\> was a reliable way to extract and rank possible representations from the training set. 

In a nutshell we:
1. Calculate the Value Zeroing scores of each token, in each training instance, with respect to the EOS token;
2. Rank, for each Topic, all the extracted words based on the Value Zeroing score;
3. Choose, for each Topic, the word that had the highest Value Zeroing score as the Topic representation;
4. Train the model on the Topic Classification task, so that when it wants to classify a certain input as a certain topic it generates the corresponding Topic representation we selected;

We found that this technique was a reliable way to improve the model's performance on the classification objective of the Topic Classification Task we tried.

Future work should focus on testing this technique on a plethora of different classification tasks, especially so in those tasks that depend heavily on lexical clues, such as Hate Speech Detection or Sentiment Analysis. 

As soon as the full paper is available I am going to post it to my [Publications page](/publications).

See you in Bolzano!

Michele

---

The Hero Image for this post was generated through the use of MidJourney v6.    