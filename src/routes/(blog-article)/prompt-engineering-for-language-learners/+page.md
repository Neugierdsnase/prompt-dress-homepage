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

This makes sure that the conversation never dries up and ChatGPT continues it with inquiring more information about the topic at hand. Let's pretend we want to learn English for the sake of this article. Let's define the conversation we want to have with the AI:

These are the parameters and boundries I want to set for the conversation:

- The language and words used should be easy and simple.
- The topics should be constrained to the ones I already studied
- TODO
- and as mentioned above: keep the conversation flowing by ending responses with a question
