//Types
import { IQuestionsPath } from "../sections.types";

export const questionsPath: IQuestionsPath = {
    eng: {
        intro: {
            id: 0,
            info: "First, before we start, do you mind if i play some music?",
            confirm: "Sure",
            deny: "I prefer silence",
          },
          step1: {
            id: 1,
            info: "Ok, now let's do this :)"
          },
          step2: {
            id: 2,
            info: "Are you anxious?",
            confirm: "Yeah...",
            deny: "Nah, i'm good",
          },
          step3: {
            id: 3,
            info: "That is great! But I'm trying to do something for the anxious people out there, so...",
            confirm: "Ok... let's do try this again",
            deny: "So get me out of here",
            link: "https://www.tiktok.com/",
          },
          step4: {
            id: 4,
            info: "I understand... I often feel this way too. Did something happen?",
            confirm: "Something happened, but it's complicated...",
            deny: "No, it's just that usual anxiety",
          },
          step5: {
            id: 5,
            info: "I see... You know, I read somewhere that buddhists believe that true happiness lies in being present. I think that every time I feel anxious, my head is anywhere but here in the moment.",
            confirm: "Make sense...",
            deny: "I don't get it",
          },
          step6: {
            id: 6,
            info: "I want to share something with you that talks a little about this. When I feel bad, I usually remember that and it makes me feel better. I really hope it does the same for you :)",
            confirm: "Ok, show me",
            link: "https://www.youtube.com/watch?v=iEIqVq7EZqE",
          },
          step7: {
            id: 7,
            info: "Stay here, on the day. It's the only place you really are.",
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
            deny: "Não, eu estou bem",
          },
          step3: {
            id: 3,
            info: "Isso é ótimo! Mesmo. Mas eu meio que tô tentando fazer uma coisa por alguém sentindo ansidade, então...",
            confirm: "Ok... Vamos tentar de novo",
            deny: "Tudo bem, então me tira daqui",
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
            info: "Entendo... Sabe, eu li que os budistas acreditam que a felicidade vem do 'estar presente'. No momento, entende?. Pessoalmente, acho que toda vez que eu me sinto muito ansioso, a minha cabeça estava em todos os lugares, menos aqui.",
            confirm: "Faz sentido...",
            deny: "Eu não sei se entendi...",
          },
          step6: {
            id: 6,
            info: "Eu quero compartilhar uma coisa com você. Quando eu me sinto na pior, eu gosto de ver isso. Me faz sentir um pouco melhor, e com sorte, talvez faça o mesmo por você :)",
            confirm: "Ok, me mostra",
            link: "https://www.youtube.com/watch?v=iEIqVq7EZqE",
          },
          step7: {
            id: 7,
            info: "Fique aqui, no agora. É o único lugar onde você realmente está.",
            confirm: ":)",
          },
    }
};
