import { IQuestionsPath } from "../home.types";

export const questionsPath: IQuestionsPath = {
  intro: {
    id: 0,
    info: "First, before we start, do you mind if I play some music?",
    confirm: "Sure",
    deny: "I prefer silence",
  },
  step1: {
    id: 1,
    info: "are you anxious?",
    confirm: "yeah...",
    deny: "nah... i'm good",
  },
  step2: {
    id: 2,
    info: "that's really good to know, but i'm kinda trying to make something for the depressed people out there, so...",
    confirm: "ok... let's do try this again",
    deny: "so get me out of here",
    link: "https://www.tiktok.com/",
  },
  step3: {
    id: 3,
    info: "I understand... I often feel this way too. Did something happen?",
    confirm: "something just happened...",
    deny: "It's that usual anxiety",
  },
  step4: {
    id: 4,
    info: "But I know, I read that Buddhists believe that true happiness lies in ‘being in the present’. I think I almost always feel anxious, it's because I'm paying attention to everything, except that it's here and now",
    confirm: "i don't get it",
    deny: "make sense...",
  },
  step5: {
    id: 5,
    info: "I want to share something with you that talks a little about this. When I'm at my worst, it makes me feel a little better about things Maybe just like it is with me, it will make you feel a little better too :)",
    confirm: "ok... let's do try this again",
    deny: "so get me out of here",
    link: "https://www.youtube.com/watch?v=iEIqVq7EZqE",
  },
  step6: {
    id: 6,
    info: "vai ficar tudo bem tudo está no seu devido lugar",
    confirm: ":)",
  },
};
