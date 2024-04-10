//Types
import { IQuestionsPath } from "../sections.types";

export const questionsPath: IQuestionsPath = {
    eng: {
        intro: {
            id: 0,
            info: "First, before we start, do you mind if I play some music?",
            confirm: "Sure",
            deny: "I prefer silence",
          },
          step1: {
            id: 1,
            info: "Ok, now let's go :)"
          },
          step2: {
            id: 2,
            info: "are you anxious?",
            confirm: "yeah...",
            deny: "nah... i'm good",
          },
          step3: {
            id: 3,
            info: "that's really good to know, but i'm kinda trying to make something for the depressed people out there, so...",
            confirm: "ok... let's do try this again",
            deny: "so get me out of here",
            link: "https://www.tiktok.com/",
          },
          step4: {
            id: 4,
            info: "I understand... I often feel this way too. Did something happen?",
            confirm: "something just happened...",
            deny: "It's that usual anxiety",
          },
          step5: {
            id: 5,
            info: "But I know, I read that Buddhists believe that true happiness lies in ‘being in the present’. I think I almost always feel anxious, it's because I'm paying attention to everything, except that it's here and now",
            confirm: "i don't get it",
            deny: "make sense...",
          },
          step6: {
            id: 6,
            info: "I want to share something with you that talks a little about this. When I'm at my worst, it makes me feel a little better about things Maybe just like it is with me, it will make you feel a little better too :)",
            confirm: "ok... let's do try this again",
            deny: "so get me out of here",
            link: "https://www.youtube.com/watch?v=iEIqVq7EZqE",
          },
          step7: {
            id: 7,
            info: "vai ficar tudo bem tudo está no seu devido lugar",
            confirm: ":)",
          },
    },
    ptbr: {
        intro: {
            id: 0,
            info: "Antes de começarmos, se importa que eu bote um música?",
            confirm: "Claro, sem problemas",
            deny: "Eu prefiro o silêncio",
          },
          step1: {
            id: 1,
            info: "Tudo certo, agora vamos lá :)"
          },
          step2: {
            id: 2,
            info: "Você está se sentindo ansioso(a)?",
            confirm: "Estou...",
            deny: "Não... Eu tô de boa",
          },
          step3: {
            id: 3,
            info: "Isso é ótimo! Mesmo. Mas eu meio que tô tentando fazer uma coisa por alguém que esteja mal, então...",
            confirm: "Ok... Vamos mais tentar de novo",
            deny: "Me tira daqui",
            link: "https://www.tiktok.com/",
          },
          step4: {
            id: 4,
            info: "Entendo... Eu costumo me sentir assim também. Aconteceu alguma coisa?",
            confirm: "Sim... Mas é complicado",
            deny: "Não, é só aquela ansiedade que está sempre por perto",
          },
          step5: {
            id: 5,
            info: "Sabe... Eu li que os budistas acreditar que a felicidade vem do 'estar presente'. No momento, entende?. Pessoalmente, acho que toda vez que eu me sinto muito ansioso, a minha cabeça estava em todos os lugares, menos no momento. Qualquer lugar, menos no aqui e agora.",
            confirm: "Faz sentido...",
            deny: "Eu não sei se entendo...",
          },
          step6: {
            id: 6,
            info: "Eu quero compartilhar uma coisa com você. Quando eu me sinto na pior, eu gosto de ver isso. Me faz sentir um pouco melhor comigo mesmo, penso no que é realmente importante, e com sorte, talvez faça você se sentir bem também :)",
            confirm: "Ok... Me mostra",
          },
          step7: {
            id: 7,
            info: "Tente relaxar. Tudo está exatamente onde deveria estar.",
            confirm: ":)",
          },
    }
 
};
