import { shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Estagiário em TI",
        company_name: "Toroid do Brasil",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Fevereiro 2021 - Fevereiro 2022",
        points: [
            "Inicialmente, fui encarregado de prestar suporte técnico, desenvolver sistemas web e aprimorar sistemas existentes, além de realizar a manutenção de infraestrutura e servidores. ",
            "Com o tempo, adquiri experiência em administração de servidores Linux, desenvolvimento de aplicações JavaScript complexas e criação de gráficos estatísticos dinâmicos baseados em dados reais.",
            "Durante minha trajetória como estagiário na Toroid do Brasil, alcancei resultados notáveis, incluindo a melhoria de processos, a otimização do tempo de consultas e a padronização da interface do usuário.",
            "Minha habilidade de aprendizado rápido e adaptação a novas tecnologias contribuiu para o sucesso dos projetos e para meu crescimento profissional dentro da empresa.",
        ],
    },
    {
        title: "Desenvolvedor Júnior",
        company_name: "Toroid do Brasil",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Fevereiro 2022 - Abril 2023",
        points: [
            "Durante minha jornada como programador júnior, adquiri valiosas habilidades em Front-End, Back-End, DevOps, Tratamento de Erros e Organização de Código. ",
            "Expandi meu conhecimento na área de redes e infraestrutura, com experiência em configuração de firewall e negociação com prestadores de serviços para implementação de soluções tecnológicas na empresa.",
            "Fui encarregado do gerenciamento de um projeto crucial de migração de sistema, liderando o processo de transição de um sistema legado para uma solução mais moderna e eficiente.",
            "Liderei a migração de um servidor físico para uma infraestrutura em nuvem, demonstrando minha capacidade de planejamento, execução e solução de problemas em ambientes complexos de TI. ",
        ],
    },
    {
        title: "Desenvolvedor Pleno",
        company_name: "Toroid do Brasil",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Abril 2023 - Atualmente",
        points: [
            "Como desenvolvedor pleno, assumi um papel de liderança ao participar da definição de fluxo de processos, monitoramento e reuniões de migração e implantação de novo sistema.",
            "Destaco minha experiência na migração de uma aplicação JavaScript, HTML e CSS tradicional para uma solução avançada em React, com uso de MongoDB e NodeJS, requisições assíncronas e padronização de entrada e saída de dados. ",
            "Entusiasmado em ampliar meus conhecimentos e habilidades em IA, machine learning e automatização de processos, busco agregar à empresa um controle mais eficiente, sugestões automatizadas e compreensão de padrões de dados. ",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vieira-brz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vinicius-vieira-braz',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];