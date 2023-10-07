---
slug: prompt-engineering-for-real-estate-listings
title: "Prompt Engineering: A real life example EVERYONE can use (but I'm using real estate as an example)"
date: 2023-10-07T08:11:21.800Z
excerpt: Explore the basics of prompt engineering and improve your interactions with Large Language Models (LLMs). Learn how crafting the right prompts can lead to better responses in this simple guide.
coverImage: /images/cyberpunk/real-estate.png
tags:
  - prompt engineering
  - basics
keywords:
  - prompt engineering
  - large language model
  - LLM
  - prompting
  - generative AI
  - ChatGPT
---

There are plenty of use cases for ChatGPT. What makes it such a powerful tool is that it's so easy to use. You type in a question, and you get an impressive answer.

There is a difference, however, between a result that is impressive because we are not used to computers being able to generate natural text this way and results that are useful to the person asking. I'll give you an example.

<img src="https://i.imgflip.com/8193r0.jpg" alt="Meme from American Psycho: Impressive, very nice, now show me what you are actually using it for.">

Large Language Models are impressive, but that doesn't always mean they are useful.

I sometimes meet a realtor at the gym. He knows I'm a software engineer, and we sometimes ask questions about each other's professions. I inquire about the real estate market, and he about software. At one point, we were talking about ChatGPT, and I'm paraphrasing his take on it:

> _It's good and really impressive what it can do, and I tried to generate some text for listings with it. However, the results are just not quite there yet, so I still have to go back and change a lot of stuff, which is the same amount of work as just writing it myself._

While I get the sentiment, it's probably not an entirely fair point since most people expect the model to return results based partly on information they don't have - like the style, tone and structure you prefer.

This is why prompt engineering is relevant and [prompt engineers](https://futurism.com/prompt-engineers-ai) are [(still)](https://www.thehindu.com/sci-tech/technology/are-prompt-engineers-still-in-demand/article67361444.ece) [in demand](https://www.msn.com/en-in/money/topstories/prompt-engineer-is-the-hottest-new-job-see-qualifications-and-salary-details/ar-AA1gECrW). So, let's take this very use case, and unravel how a prompt engineer might tackle this task step-by-step.

<img src="https://media.giphy.com/media/zaezT79s3Ng7C/giphy.gif" alt="" />

## Setting the right context

First off, we need to set the proper context. A popular way to do this is to propose a role play, asking ChatGPT to take on the role of a competent and knowledgeable counterpart. This is an example of this:

_"You are a realtor writing copy for the new listing they want to sell or rent. You have a specific structure you always want to adhere to and a specific tone in which you like these texts to be written._

_I will give examples of text I like, and I want you to reproduce their structure and tone with the information about the new objects I will provide you afterwards."_

If we submit the prompt like this, the model will respond by reiterating the key points of the prompt, which is unnecessary, so I like to end all my "priming" prompts with: _"If you understand, just reply with READ."_

**Side note:** This also conveniently [saves us some tokens.](https://www.aidare.com/what-are-tokens-and-their-role-in-chatgpt/)

Perfect, so now we have the initial prompt set up, and we might need to come back to it later and tweak it a bit. Still, it is a great start, so I will save that prompt into my [Prompt Dress browser extension](https://chrome.google.com/webstore/detail/prompt-dress/mpcinhhegdohpapgmiopjlfhemhhfmid) so that I always have it ready the next time I need it.

## Adding templates to let the AI know the style we like

Cool. Now, I will continue by pasting in some of the text I'd like ChatGPT to use as templates. So, I found these texts for some random London apartments online that I will use here. [I pasted them in this bin so you can reproduce my workflow.](https://paste.bingner.com/paste/fsm22/raw)

Alright, so I like to open the prompt with the disclaimer that this is one of the examples. I paste in the text, and then I end the prompt with something that will shorten the response again.

Quick recap: The structure now is:

_"This is one of the examples I would like you to follow._<br>
_[one of the mentioned examples I put in this bin]_<br>
_If you understand, reply READ."_

## Priming done, let's prompt

So, after this is done, it's finally time to get to the good parts. We can consider our AI sufficiently primed for our use case and now prompt it for the task we want to perform. I tried this with the following made-up example.

_"I now have a new listing with the following stats: 80 square meters plus 15 square meter balcony, location relatively central, but in a bad neighbourhood. Third floor. Bathroom and toilet separately. The main selling point is that it is bright. Generate a listing for this object."_

The result is spot-on. The text generated follows the templates given in structure and tone and cleverly describes the downsides positively. I would be confident that any real estate agent would be satisfied with the result as-is (provided the templates given are ones they like).

Know that what I just showed you is a widespread technique used by many people to get the results they want, but since this worked so well, I now want to save the work I've done. Until now, this was mostly a matter of having some text files lying around somewhere, which quickly gets messy.

That's why I made a browser extension to tackle this problem, first for myself, then I decided to share it with you guys and called it "Prompt Dress".

Please let me know if you found this helpful via the appropriate buttons or commenting. If you are falling in love with the extension and want to keep up to date with its development, the best way is by [following me on Medium](https://medium.com/@k8603427), [signing up for my email newsletter](https://prompt-dress.vomkonstant.in/p/5f693fe8-6f20-4796-b0dc-8d3848e591a0), or [following this blog.](https://prompt-dress.com/blog)

A version of this article has been posted [to my Medium account.](https://medium.com/@k8603427)
