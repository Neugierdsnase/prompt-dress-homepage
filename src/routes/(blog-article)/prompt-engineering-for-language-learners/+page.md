---
slug: prompt-engineering-for-language-learners
title: 'Prompt Engineering for language learners'
date: 2023-10-10T13:55:21.800Z
excerpt: Learn how to prime ChatGPT so you can use it as a conversational partner for practicing second languages
coverImage: /images/cyberpunk/conversation.png
tags:
  - prompt engineering
  - language learning
keywords:
  - prompt engineering
  - language learning
  - large language model
  - LLM
  - prompting
  - generative AI
  - ChatGPT
---

If you want to learn a language, a plethora of apps, websites, books, and podcasts can help you. With the rising proficiency of Large Language Models, a new player entered the game.

ChatGPT is, as of writing these lines, the uncontested champion of Large Language Models, due to large parts just the sheer volume of input it was given as training data. As this training data was pretty much the whole internet of the last ten years, it includes text in many different languages. This means that it is well-trained not only in English but also in languages contained sufficiently within the training data.

## Hey Computer, have a conversation with me

By default, ChatGPT is not really in conversation mode. It will not prompt you back and request more information from you. It will try to answer the question as well as possible with the information given and consider its job done.

<img src="https://media1.giphy.com/media/3adl5Cc0CsbfEH3l5E/giphy.gif?cid=ecf05e47ndoegrln27zeuor8gsfxz4s7t4ni2yg0mpkltdaj&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="A gif showing a woman ending a conversation decisively">

This is where prompt engineering comes in. For situations when I want to enter _"conversation mode"_ with an LLM, there is a magic phrase I like to use right in my first prompt:

> I want you to end every answer with a question.

This ensures that the conversation never dries up, and ChatGPT continues it by inquiring more about the topic. Let's pretend we want to learn English for the sake of this article. Let's define the conversation we want to have with the AI.

These are the parameters and boundaries I want to set for the conversation:

- The language and words used should correspond to your current level.
- The topics should be constrained to the ones I am already familiar with.
- It should not tolerate grammatical errors and typos as it usually would
- and as mentioned above, keep the conversation flowing by ending responses with a question.

## Drafting the prompt

Let's start with a general sentence that sets the primary setting for our conversation.

> I want to learn German, and I want to practice my conversational skills with you.

The stage is set, so far, so good. Now, let's go through the points above and formulate them as concisely and precisely as possible.

> I am currently on the B1 level...

The categorization of language skills according to the ["Common European Framework of Reference for Languages"](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages) is a widely accepted and used standard for classifying language skills and thus is well within ChatGPT's knowledge. Let's continue:

> I am currently on the B1 level, and the topics I am comfortable with are hobbies and outside activities.

For the next point, we should ask it to be strict with us but to keep the corrections positive so we don't demotivate ourselves.

> Strictly correct any grammatical errors or typos I might make and point them out in an understanding and encouraging tone.

For the last point, we should consider not only asking for a question at the end but also telling the model the reason for our request, giving it more context. It may then - for example - opt for an open-ended instead of a closed-ended question.

> End every reply with a question to keep the conversation flowing.

So there we have it. Our complete prompt now reads:

> I want to learn German, and I want to practice my conversational skills with you. I am currently on the B1 level, and the topics I am comfortable with are hobbies and outside activities. Strictly correct any grammatical errors or typos that I might make and point them out to me in an understanding and encouraging tone. End every reply with a question to keep the conversation flowing.

Here is a screenshot of how that worked out for me. I deliberately conversed with a bunch of different mistakes (German is actually my first language), and every correction that ChatGPT offered was spot on. It even used encouraging phrases like _"fast perfekt"_ ("almost perfect") when correcting my mistakes. The questions it offers in return are very much on topic, while the words used are easy, and the structure of the sentences is simple.

<img src="https://i.imgur.com/qQTXsOC.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

## Variations of the prompt

It is important to remember that the same prompt with only slightly different formulations and words can impact the replies we get from the AI. Take this prompt, for example, where I have expressed the same sentiment. Still, the model seems to think there is a need to appear more whimsical and use emotes, nothing I explicitly specified.

<img src="https://i.imgur.com/QH2lREX.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

Since it is not immediately apparent to us as humans what the second prompt has caused - among other minor changes - the use of emotes, it is crucial to save the prompts that yield results we are satisfied with.

## Saving the prompt

Now, how do we save the prompt so we don't need to redo all the work we did every time we wanted a little language-learning session?

Well, here is where [this browser extension] comes into play. It allows us to save prompts right in our browser so we always have them ready for use.

_Disclaimer: I am the one-man show behind this browser extension, so this is my plug for the thing. It would really mean a lot to me if you checked it out and shot some feedback my way!_

<img src="https://c4.wallpaperflare.com/wallpaper/89/9/256/movie-puss-in-boots-wallpaper-thumb.jpg" alt="Puss in Boots making puppy eyes." />

Here is the even cooler part: If you want to keep some parts of the prompt changeable, you can put a placeholder in the text (and still maintain a default value).

Here is what our prompt looks like, but with dynamic values for the language you want to practice, your level, and the topics you are familiar with.

<img src="https://i.imgur.com/KA5YTA1.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

Pretty cool, huh? And one more thing: If you download the extension now, you will find that this very prompt is already in there as one of the example prompts!

There is even more to this, but that can be better shown in a video, which is why I will upload tutorials with this kind of content to [this channel](https://www.youtube.com/watch?v=dQw4w9WgXcQ). [Subscribe now](https://www.youtube.com/watch?v=dQw4w9WgXcQ) if you want to see me craft real-time prompts!

Please let me know if you found this helpful via the appropriate buttons or commenting. Suppose you are falling in love with the extension and want to keep up to date with its development. In that case, the best way is by [following me on Medium](https://medium.com/@k8603427), [signing up for my email newsletter](https://prompt-dress.vomkonstant.in/p/5f693fe8-6f20-4796-b0dc-8d3848e591a0), or [following this blog.](https://prompt-dress.com/blog)

A version of this article has been posted [to my Medium account.](https://medium.com/@k8603427)
