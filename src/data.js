// Edite este arquivo para personalizar todo o conteúdo do site.
// Nenhuma outra parte do código precisa ser tocada para trocar textos, projetos ou links.

export const profile = {
  name: 'Cauã Mata',
  role: 'Full Stack Developer',
  location: 'Brasília, Brasil',
  tagline: 'Construo produtos completos, da interface ao banco de dados, rápidos e bem cuidados nos detalhes.',
  bio: `Sou desenvolvedor(a) full stack, atuando da interface ao banco de dados.
  Já projetei APIs, modelei banco de dados e implementei autenticação em mais de
  um projeto, com stacks diferentes. Gosto de transformar ideias em produtos
  usáveis, prestando atenção tanto na performance quanto nos pequenos detalhes
  que fazem diferença para quem usa.`,
  email: 'cauamta141003@gmail.com',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/CauaMata14',
    linkedin: 'https://www.linkedin.com/in/cau%C3%A3-mata-994079296/',
    twitter: '',
  },
}

// Trechos de "código" usados no efeito de digitação do hero.
export const heroSnippets = [
  "const dev = { stack: 'full-stack' }",
  "app.post('/api/chamados', authenticate)",
  "model User { role Role @default(USER) }",
  "git commit -m 'vamos conversar'",
]

export const skills = [
  { group: 'Front-End', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Nuxt', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Back-End', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB', 'JWT'] },
  { group: 'Ferramentas', items: ['Vite', 'Git', 'Figma'] },
]

export const projects = [
  {
    title: 'Controle de Gastos Pessoais',
    description:
      'Aplicação full-stack para cadastrar receitas e despesas, categorizar e visualizar gráficos de gastos por categoria e por mês, com filtro por período.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Recharts'],
    url: 'https://controle-de-gastos-esd9.vercel.app/',
    repo: 'https://github.com/CauaMata14/controle-de-gastos',
  },
  {
    title: 'Sistema de Chamados de TI',
    description:
      'Plataforma de abertura e gestão de chamados de suporte, com autenticação JWT (refresh token rotativo), permissões diferentes para usuário e técnico e timeline de eventos por chamado.',
    tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS'],
    url: 'https://sistema-chamados-ti-chi.vercel.app',
    repo: 'https://github.com/CauaMata14/sistema-chamados-ti',
  },
  {
    title: 'Projeto Três',
    description:
      'Breve descrição do terceiro projeto. Projetos pessoais, freelas ou desafios de estudo também valem.',
    tech: [],
    emConstrucao: true,
    url: '#',
    repo: '#',
  },
]
