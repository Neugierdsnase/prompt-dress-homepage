---
hidden: true
coverImage: /images/cyberpunk/conversation.png
---

If you want to learn a language there is a plethora of apps, websites, books and podcasts out there that can help you. With the rising perficiancy of Large Language Models though, a new player entered the game.

ChatGPT is as of writing these lines the uncontested champion of Large Language Models, due to large parts just the sheer volume of input it was given as training data. As this trainig data was pretty much the whole of the internet of the last ten years, it includes text in a lot of different languages. Meaning that it is well trained not only in English, but also in languages that were contained at a sufficient quantity within the training data.

## Hey Computer, have a conversation with me

By default, ChatGPT is not really in conversation mode. It will not prompt you back and request more information from you, it will try to answer the question as well as it possibly can with the information given. This is where prompt engineering comes in.

For situations like this, when I want to enter _conversation mode_ with an LLM, there is a magic phrase I like to use right in my first prompt:

> I want to end every answer with a question.

This makes sure that the conversation never dries up and ChatGPT continues it with inquiring more information about the topic at hand. Let's pretend we want to learn English for the sake of this article. Let's define the conversation we want to have with the AI.

These are the parameters and boundries I want to set for the conversation:

- The language and words used should be in accordance to the level you are currently speaking.
- The topics should be constrained to the ones I am already familiar with.
- It should not gloss over grammatical errors and typos as it usually would.
- and as mentioned above: keep the conversation flowing by ending responses with a question

## Drafting the prompt

Let's start with a general sentence that sets the basic setting for our conversation:

> I want to learn German and I want to practice my conversational skills with you.

The stage is set, so far so good. Now, let's go through the points above and try to formulate them as concisely and precisely as we can:

> I am currently on the B1 level...

The categorization of language skills according to the ["Common European Framework of Reference for Languages"](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages) is a widely accepted and used standard for classifying language skills and thus is well within ChatGPT's knowledge. Let's continue:

> I am currently on the B1 level and the topics I am comfortable with are hobbies and outside activities.

For the next point we should ask it to be strict with us, but to keep the corrections in a positive spirit, so we don't demotivate ourselves.

> Strictly correct any grammatical errors or typos that I might make and point them out to me in an understanding and encouraging tone.

for the last point we should consider not only asking for a question at the end, but also telling the model the reason for our request, so it has more context and may - for example - opt for an open-ended, instead of a closed-ended question.

> End every reply with a question to keep the conversation flowing.

So there we have it, our complete prompt now reads:

> I want to learn German and I want to practice my conversational skills with you. I am currently on the B1 level and the topics I am comfortable with are hobbies and outside activities. Strictly correct any grammatical errors or typos that I might make and point them out to me in an understanding and encouraging tone. End every reply with a question to keep the conversation flowing.

Here is a screenshot of how that worked out for me. I deliberately conversed with a bunch of different mistakes (German is actually my first language) and every correction that ChatGPT offered is spot on and it even uses encouraging phrases like _"fast perfekt"_ ("almost perfect"), when correcting my mistakes. The questions it offers in return are very much on topic, while the words used are easy and the structure of the sentences is simple.

<img src="first_conversation.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

## Variations of the prompt

TODO

<img src="second_conversation.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

## Saving the prompt

Now how do we save the prompt so don't need to redo all the work that we just did, every time we want a little language learning session?

Well, here is where [this browser extension] comes into play. It allows you save prompts right in your browser so you always have them ready for use.

_Disclaimer: I am the one-man show behind this browser extension, so this is my plug for the thing. It would really mean a lot to me if you checked it out and shot some feedback my way!_ :big_eyed_smiley:

Now here is the cool part: If you want to keep some parts of the prompt changable, you can put a placeholder in the text (and still keep a default value).

Here is how our prompt looks like, but with dynamic values for the language you want to practice, the level you are on and the topics you are familiar with.

<img src="corsages_screenshot.png" alt="The conversation I had with ChatGPT after using the prompt we just created." />

Pretty cool, huh? And one more thing: If you download the extension now, you will find that this very prompt is actually already in there as one of the example prompts!

Please let me know if you found this helpful via the appropriate buttons or commenting. If you are falling in love with the extension and want to keep up to date with its development, the best way is by [following me on Medium](https://medium.com/@k8603427), [signing up for my email newsletter](https://prompt-dress.vomkonstant.in/p/5f693fe8-6f20-4796-b0dc-8d3848e591a0), or [following this blog.](https://prompt-dress.com/blog)

A version of this article has been posted [to my Medium account.](https://medium.com/@k8603427)
