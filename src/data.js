// Edite este arquivo para personalizar todo o conteúdo do site.
// Nenhuma outra parte do código precisa ser tocada para trocar textos, projetos ou links.

export const profile = {
  name: 'Cauã Mata',
  role: 'Front-end Developer',
  location: 'Brasília, Brasil',
  tagline: 'Construo interfaces rápidas, acessíveis e bem cuidadas nos detalhes.',
  bio: `Sou desenvolvedor(a) front-end com foco em criar experiências de interface
  limpas e funcionais. Gosto de transformar ideias em produtos usáveis, prestando
  atenção tanto na performance quanto nos pequenos detalhes que fazem diferença
  para quem usa.`,
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
  "const dev = { foco: 'front-end' }",
  "function criar(ideia) { return interface }",
  "export default Voce",
]

export const skills = [
  { group: 'Hard Skills', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['Vue', 'React', 'Nuxt', 'Tailwind CSS'] },
  { group: 'Ferramentas', items: ['Vite', 'Git', 'Figma', 'Node.js'] },
]

export const projects = [
  {
    title: 'Controle de Gastos Pessoais',
    description:
      'Aplicação full-stack para cadastrar receitas e despesas, categorizar e visualizar gráficos de gastos por categoria e por mês, com filtro por período.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Recharts'],
    url: 'https://controle-de-gastos.vercel.app',
    repo: 'https://github.com/CauaMata14/controle-de-gastos',
  },
  {
    title: 'Projeto Dois',
    description:
      'Breve descrição do segundo projeto. Pode citar um desafio técnico interessante que você resolveu.',
    tech: ['React', 'TypeScript'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Projeto Três',
    description:
      'Breve descrição do terceiro projeto. Projetos pessoais, freelas ou desafios de estudo também valem.',
    tech: ['JavaScript', 'CSS'],
    url: '#',
    repo: '#',
  },
]
