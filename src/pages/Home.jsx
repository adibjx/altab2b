import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Wallet,
  UserX,
  Battery,
  Brain,
  Users,
  ClipboardCheck,
  Workflow
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ScrambleText from '../components/ScrambleText.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import styles from './Home.module.css'

const PAINS = [
  {
    icon: AlertTriangle,
    title: 'Seus concorrentes já estão se movendo',
    text: 'Todo mundo fala de inteligência artificial. Enquanto você adia, quem se moveu primeiro abre uma vantagem cada vez mais difícil de alcançar.'
  },
  {
    icon: Wallet,
    title: 'Suas margens estão se apertando',
    text: 'Sua empresa fatura bem, mas o lucro não aparece. Gente demais, processo demais, retrabalho demais — tudo comendo a sua margem.'
  },
  {
    icon: UserX,
    title: 'Clientes não estão voltando',
    text: 'Atendimento lento, erros do time, gente que vai embora sem você nem saber por quê. O problema não é falta de esforço — é falta de sistema.'
  },
  {
    icon: Battery,
    title: 'Você está esgotado',
    text: 'Você trabalha mais do que qualquer funcionário. Se você para, a empresa para. Isso não é dedicação — é um modelo que não escala.'
  }
]

const SERVICES = [
  {
    slug: 'implementacao-de-ia',
    icon: Brain,
    title: 'Implementação de IA',
    text: 'Agentes inteligentes, automação de processos e atendimento 24h. Colocamos a inteligência artificial pra trabalhar no seu negócio.'
  },
  {
    slug: 'treinamento-de-equipe',
    icon: Users,
    title: 'Treinamento de Equipe',
    text: 'Tecnologia sem adoção é desperdício. Capacitamos seu time pra usar cada ferramenta que implementamos.'
  },
  {
    slug: 'diagnostico-operacional',
    icon: ClipboardCheck,
    title: 'Diagnóstico Operacional',
    text: 'Mapeamos gargalos e oportunidades antes de propor qualquer solução. O diagnóstico é gratuito.'
  },
  {
    slug: 'automacao-de-processos',
    icon: Workflow,
    title: 'Automação de Processos',
    text: 'Do marketing ao administrativo, eliminamos tarefas manuais e repetitivas. Menos erro, menos retrabalho, mais tempo pro que importa.'
  }
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLines} aria-hidden="true" />
        <div className={styles.heroBleed} aria-hidden="true" />
        <span className={styles.heroGhost} aria-hidden="true">ALTA</span>

        {/* HUD — instrument readout */}
        <div className={styles.hud} aria-hidden="true">
          <span className={`${styles.hudItem} ${styles.hudTL}`}>ALTA™ / PERFORMANCE&nbsp;SYSTEMS</span>
          <span className={`${styles.hudItem} ${styles.hudTR}`}>[ IA · OPS · GROWTH ]</span>
          <span className={`${styles.hudItem} ${styles.hudBL}`}>UBERABA · BR — 19°45′S</span>
          <span className={`${styles.hudItem} ${styles.hudBR}`}>v1.0 — EST. 2024</span>
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Reveal>
              <span className={styles.heroIndex}>(01) — Manifesto</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className={styles.heroTitle}>
                <ScrambleText text="ALTA PERFORMANCE" className={styles.heroEmphasis} />
                <br />
                para sua empresa
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.heroSub}>
                Nossos sistemas e expertise, aliados ao poder da inteligência
                artificial, vão levar sua empresa, equipes e receita ao mais
                alto nível.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className={styles.heroActions}>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  Agendar diagnóstico gratuito <ArrowRight size={18} />
                </a>
                <Link to="/servicos" className="btn btn--ghost btn--large">
                  Ver serviços
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className="headline-lg">
                Se alguma dessas situações parece familiar,{' '}
                <span className="accent-text">a gente precisa conversar.</span>
              </h2>
            </Reveal>
          </div>

          <div className={`grid grid--4 ${styles.painGrid}`}>
            {PAINS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className={`card ${styles.painCard}`}>
                  <div className={styles.painIcon}>
                    <p.icon size={22} />
                  </div>
                  <h3 className="headline-sm">{p.title}</h3>
                  <p className="body-text">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className={styles.painClose}>
              Essas não são falhas suas. São sintomas de uma empresa que ainda não tem
              tecnologia trabalhando a seu favor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className="headline-lg">O que fazemos</h2>
            </Reveal>
          </div>

          <div className={`grid grid--4 ${styles.servicesGrid}`}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className={styles.serviceCard}>
                  <div className={styles.serviceTop}>
                    <div className={styles.serviceIcon}>
                      <s.icon size={26} />
                    </div>
                    <span className={styles.serviceIndex}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="headline-md">{s.title}</h3>
                  <p className="body-text">{s.text}</p>
                  <Link to={`/servicos/${s.slug}`} className={styles.serviceLink}>
                    Saiba mais <ArrowUpRight size={16} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className={styles.servicesCta}>
              <Link to="/servicos" className="btn btn--ghost btn--large">
                Conheça nossos serviços <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* URGENCY */}
      <section className={`section ${styles.urgencySection}`}>
        <div className={styles.urgencyGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.urgencyInner}>
            <Reveal delay={80}>
              <h2 className="headline-lg">
                A janela de vantagem competitiva está aberta.{' '}
                <span className="accent-text">Mas não vai ficar.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.urgencyText}>
                Empresas que adotam IA agora estão construindo uma distância que será cada vez
                mais difícil de alcançar. A qualidade da mão de obra diminui, os custos
                operacionais sobem, e a concorrência se adapta. Quem não agir enquanto ainda
                é vantagem, vai ter que agir quando já for obrigação.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                Não fique pra trás — agende seu diagnóstico <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.finalCta}>
              <div className={styles.finalLeft}>
                <span className={styles.finalIndex}>(02) — Diagnóstico gratuito</span>
                <h2 className="headline-lg">
                  Pronto pra descobrir o que está travando o crescimento da sua empresa?
                </h2>
              </div>
              <div className={styles.finalRight}>
                <p className={styles.finalText}>
                  O diagnóstico é gratuito, dura 30 minutos e é feito por um especialista
                  do nosso time. Você sai da conversa sabendo exatamente onde estão os
                  gargalos e o que fazer a respeito.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  Agendar diagnóstico gratuito <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
