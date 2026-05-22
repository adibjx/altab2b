import {
  Brain,
  Database,
  Bot,
  Workflow,
  Headset,
  Users,
  GraduationCap,
  BookOpen,
  Repeat,
  Stethoscope,
  Search,
  Map,
  LineChart,
  ClipboardList,
  FileSearch,
  Megaphone,
  Mail,
  Receipt,
  Boxes
} from 'lucide-react'

export const SERVICES = [
  {
    slug: 'implementacao-de-ia',
    index: '01',
    icon: Brain,
    title: 'Implementação de Inteligência Artificial',
    short: 'Implementação de IA',
    summary:
      'Agentes inteligentes, automação e atendimento 24h. Colocamos a IA pra trabalhar dentro da sua operação.',
    tagline:
      'Não vendemos ferramenta. Implementamos soluções de IA que resolvem problemas reais da sua operação — e acompanhamos até funcionarem.',
    problem: {
      heading: 'O problema',
      paragraphs: [
        'Todo mundo fala de inteligência artificial, mas pouca gente sabe onde ela realmente resolve. O resultado é empresa comprando ferramenta solta, sem integração com o negócio, que ninguém usa.',
        'Implementar errado custa tempo e dinheiro — e deixa a impressão de que "IA não funciona pra mim". O problema nunca foi a tecnologia. Foi a falta de estratégia e execução.'
      ]
    },
    offer: {
      heading: 'O que está incluído',
      intro:
        'Cada frente é desenhada a partir do que a sua operação precisa — não de um pacote pronto.',
      items: [
        {
          icon: Database,
          title: 'Knowledge Base Inteligente',
          text: 'Toda a base de conhecimento da empresa — processos, políticas, manuais, histórico — organizada e acessível para humanos e agentes de IA. Sua equipe encontra qualquer informação em segundos. Seus agentes operam com contexto completo do negócio.'
        },
        {
          icon: Bot,
          title: 'Funcionários 24/7',
          text: 'Agentes especializados de IA que trabalham sem parar. Atendem clientes, processam informações, executam tarefas repetitivas e escalam apenas o que precisa de decisão humana. Sua operação não dorme mais.'
        },
        {
          icon: Workflow,
          title: 'Automação de Processos',
          text: 'Identificamos processos manuais e repetitivos e os automatizamos. Menos erro humano, menos retrabalho, menos custo. Sua equipe foca no que importa.'
        },
        {
          icon: Headset,
          title: 'Atendimento Inteligente',
          text: 'Atendimento ao cliente que funciona 24 horas, responde com precisão, resolve problemas simples sozinho e encaminha os complexos pro time certo. Você para de perder cliente por demora.'
        }
      ]
    },
    process: {
      heading: 'Como funciona',
      steps: [
        { icon: Search, title: 'Mapeamento', text: 'Entendemos sua operação e identificamos onde a IA gera mais impacto.' },
        { icon: ClipboardList, title: 'Desenho da solução', text: 'Definimos exatamente o que será implementado e qual resultado esperar.' },
        { icon: Boxes, title: 'Implementação', text: 'Construímos e integramos a solução ao seu fluxo de trabalho real.' },
        { icon: Repeat, title: 'Treinamento e ajuste', text: 'Capacitamos o time e refinamos até a adoção ser real.' }
      ]
    },
    outcomes: {
      heading: 'O que você ganha',
      items: [
        'Uma operação que continua rodando fora do horário comercial',
        'Menos erro humano, menos retrabalho e menos custo operacional',
        'Equipe livre das tarefas repetitivas, focada em decisão e relacionamento',
        'Conhecimento do negócio acessível em segundos — por pessoas e por agentes'
      ]
    }
  },
  {
    slug: 'treinamento-de-equipe',
    index: '02',
    icon: Users,
    title: 'Treinamento de Equipe',
    short: 'Treinamento de Equipe',
    summary:
      'Tecnologia sem adoção é desperdício. Capacitamos seu time pra usar cada ferramenta que implementamos.',
    tagline:
      'A melhor tecnologia do mundo não serve pra nada se ninguém usa. Capacitamos seu time do básico ao avançado — e ficamos até a adoção ser real.',
    problem: {
      heading: 'O problema',
      paragraphs: [
        'A maioria das implementações de tecnologia não falha na ferramenta. Falha na adoção. A empresa investe, instala, e seis meses depois ninguém usa de verdade.',
        'Sem capacitação no ritmo da equipe, a tecnologia vira mais uma coisa que "o pessoal não pegou". O investimento se perde e a operação volta ao manual.'
      ]
    },
    offer: {
      heading: 'O que está incluído',
      intro: 'Treinamento prático, no contexto do seu negócio — não um curso genérico.',
      items: [
        {
          icon: GraduationCap,
          title: 'Do básico ao avançado',
          text: 'Capacitação em inteligência artificial e novas tecnologias, no nível de cada pessoa do time — do primeiro contato ao uso avançado.'
        },
        {
          icon: BookOpen,
          title: 'Material e playbooks sob medida',
          text: 'Guias práticos construídos a partir das ferramentas e processos da sua empresa, pra consulta no dia a dia.'
        },
        {
          icon: Repeat,
          title: 'Acompanhamento até a adoção',
          text: 'Não entregamos o treinamento e vamos embora. Acompanhamos o uso real até a tecnologia fazer parte da rotina.'
        }
      ]
    },
    process: {
      heading: 'Como funciona',
      steps: [
        { icon: Search, title: 'Diagnóstico de maturidade', text: 'Entendemos o nível atual do time e o que cada um precisa aprender.' },
        { icon: ClipboardList, title: 'Plano de capacitação', text: 'Montamos a trilha sob medida, no ritmo da equipe.' },
        { icon: GraduationCap, title: 'Treinamento prático', text: 'Capacitamos no fluxo de trabalho real, com material de apoio.' },
        { icon: Repeat, title: 'Acompanhamento', text: 'Medimos a adoção e ajustamos até virar hábito.' }
      ]
    },
    outcomes: {
      heading: 'O que você ganha',
      items: [
        'Equipe que de fato usa as ferramentas implementadas',
        'Menos dependência de uma ou duas pessoas-chave',
        'Adoção real, medida e acompanhada — não só um treinamento avulso',
        'Retorno do investimento em tecnologia que estava parado'
      ]
    }
  },
  {
    slug: 'diagnostico-operacional',
    index: '03',
    icon: Stethoscope,
    title: 'Diagnóstico Operacional',
    short: 'Diagnóstico Operacional',
    summary:
      'Mapeamos gargalos e oportunidades antes de propor qualquer solução. O diagnóstico é gratuito.',
    tagline:
      'Antes de propor qualquer solução, fazemos um mapeamento completo da sua operação. Onde você perde dinheiro, onde desperdiça tempo e onde estão as maiores oportunidades.',
    free: true,
    problem: {
      heading: 'O problema',
      paragraphs: [
        'Você sente que perde dinheiro em algum lugar da operação, mas não sabe exatamente onde. Sabe que dá pra fazer melhor, mas não tem clareza do quê atacar primeiro.',
        'Sem um mapa claro, qualquer investimento em tecnologia vira aposta. O diagnóstico existe pra tirar a decisão do achismo.'
      ]
    },
    offer: {
      heading: 'O que olhamos',
      intro: 'Uma leitura honesta da sua operação, do gargalo à oportunidade.',
      items: [
        {
          icon: FileSearch,
          title: 'Mapeamento de gargalos',
          text: 'Onde a operação trava, onde há retrabalho e onde o esforço não vira resultado.'
        },
        {
          icon: LineChart,
          title: 'Oportunidades de receita e eficiência',
          text: 'Onde dá pra ganhar mais, gastar menos e liberar tempo da equipe e do dono.'
        },
        {
          icon: Map,
          title: 'Recomendação de caminho',
          text: 'O que faz sentido implementar primeiro — e qual resultado esperar de cada passo.'
        }
      ]
    },
    process: {
      heading: 'Como funciona',
      steps: [
        { icon: Headset, title: 'Conversa de 30 minutos', text: 'Um especialista do time entende seu negócio e seus objetivos.' },
        { icon: FileSearch, title: 'Mapeamento', text: 'Identificamos gargalos e oportunidades de maior impacto.' },
        { icon: Map, title: 'Recomendação', text: 'Você sai sabendo onde estão os problemas e o que fazer a respeito.' }
      ]
    },
    outcomes: {
      heading: 'O que você ganha',
      items: [
        'Clareza sobre onde sua empresa está perdendo dinheiro e tempo',
        'Uma lista priorizada de oportunidades, da mais simples à mais estratégica',
        'Uma recomendação concreta de próximos passos — sem compromisso',
        'Tudo isso em 30 minutos, por nossa conta'
      ]
    }
  },
  {
    slug: 'automacao-de-processos',
    index: '04',
    icon: Workflow,
    title: 'Automação de Processos',
    short: 'Automação de Processos',
    summary:
      'Do marketing ao administrativo, eliminamos tarefas manuais e repetitivas. Mais tempo pro que importa.',
    tagline:
      'Toda empresa tem tarefas que se repetem todo dia, consomem horas e geram erro. A gente identifica, automatiza e devolve esse tempo pro seu time.',
    problem: {
      heading: 'O problema',
      paragraphs: [
        'Boa parte da rotina da sua equipe é trabalho manual e repetitivo: copiar dados de um lugar pra outro, preencher planilha, mandar o mesmo e-mail, conferir o que já foi conferido.',
        'Esse trabalho não escala, cansa o time e é onde mais aparecem erros. É exatamente o tipo de coisa que a tecnologia faz melhor — e mais barato.'
      ]
    },
    offer: {
      heading: 'Onde atuamos',
      intro: 'Da ponta que fala com o cliente ao back-office que ninguém vê.',
      items: [
        {
          icon: Megaphone,
          title: 'Marketing e vendas',
          text: 'Captura e qualificação de leads, follow-up, organização de pipeline e relatórios que se montam sozinhos.'
        },
        {
          icon: Mail,
          title: 'Atendimento e comunicação',
          text: 'Respostas padronizadas, triagem de mensagens e encaminhamento automático pro time certo.'
        },
        {
          icon: Receipt,
          title: 'Administrativo e financeiro',
          text: 'Conferências, lançamentos, cobranças e relatórios recorrentes sem trabalho manual.'
        }
      ]
    },
    process: {
      heading: 'Como funciona',
      steps: [
        { icon: Search, title: 'Mapeamento de tarefas', text: 'Levantamos os processos manuais e repetitivos que mais consomem tempo.' },
        { icon: ClipboardList, title: 'Priorização', text: 'Começamos pelo que dá mais retorno com menos esforço.' },
        { icon: Workflow, title: 'Automação', text: 'Construímos e integramos a automação ao seu fluxo atual.' },
        { icon: Repeat, title: 'Ajuste e expansão', text: 'Refinamos o que está rodando e avançamos pros próximos processos.' }
      ]
    },
    outcomes: {
      heading: 'O que você ganha',
      items: [
        'Horas da equipe devolvidas toda semana',
        'Menos erro humano nas tarefas críticas',
        'Processos que rodam igual, todo dia, sem depender de ninguém',
        'Custo operacional menor sem perder qualidade'
      ]
    }
  }
]

export const getService = slug => SERVICES.find(s => s.slug === slug)
