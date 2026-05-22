import { ArrowRight, Compass, Hammer, HeartHandshake, Target } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import styles from './Sobre.module.css'

const BELIEFS = [
  {
    icon: Compass,
    title: 'Estratégia antes de tecnologia',
    text: 'Não saímos instalando ferramenta. Entendemos o negócio primeiro. A tecnologia serve à estratégia, nunca o contrário.'
  },
  {
    icon: Hammer,
    title: 'Execução, não relatório',
    text: 'Não entregamos diagnóstico bonito pra morrer na gaveta. Implementamos a solução e ficamos até funcionar.'
  },
  {
    icon: HeartHandshake,
    title: 'O empresário brasileiro merece mais',
    text: 'PMEs brasileiras operam em condições difíceis — carga tributária, mão de obra escassa, burocracia. Tecnologia e inteligência operacional são as maiores alavancas que elas têm. Nosso trabalho é garantir que usem.'
  }
]

export default function Sobre() {
  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <Reveal>
              <h1>
                Sobre a <span className="accent-text">ALTA</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Existimos para elevar o nível das empresas brasileiras — com
                tecnologia, inteligência artificial e operações que realmente
                funcionam.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="section">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyLeft}>
              <Reveal>
                <h2 className="headline-lg">Nosso propósito</h2>
              </Reveal>
              <Reveal delay={140}>
                <div className={styles.icoBlock}>
                  <Target size={20} />
                  <span>Elevar o nível das empresas brasileiras</span>
                </div>
              </Reveal>
            </div>
            <div className={styles.storyRight}>
              <Reveal delay={120}>
                <p className={styles.storyText}>
                  As empresas brasileiras têm potencial de sobra. O que costuma
                  faltar é acesso à tecnologia certa e à inteligência operacional
                  que transforma esforço em resultado.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className={styles.storyText}>
                  A <strong>ALTA</strong> existe pra fechar essa lacuna. Levamos
                  estratégia, inteligência artificial e execução para empresas que
                  querem crescer com consistência — e não na base da sorte.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className={styles.storyText}>
                  Nosso compromisso é direto: elevar o nível de operação de cada
                  empresa com quem trabalhamos, com resultado que aparece no dia a
                  dia e no caixa.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className={`section ${styles.beliefsSection}`}>
        <div className="container">
          <div className={styles.beliefsHead}>
            <Reveal>
              <h2 className="headline-lg">O que nos move</h2>
            </Reveal>
          </div>
          <div className={styles.beliefsGrid}>
            {BELIEFS.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <article className={styles.beliefCard}>
                  <div className={styles.beliefIcon}>
                    <b.icon size={24} />
                  </div>
                  <h3 className="headline-sm">{b.title}</h3>
                  <p className="body-text">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div className={styles.teamHead}>
            <Reveal>
              <h2 className="headline-lg">Quem faz acontecer</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.teamIntro}>
                Uma equipe enxuta de engenheiros de software, especialistas em
                inteligência artificial e estrategistas de operações.
                Quem diagnostica é quem implementa.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <article className={styles.memberCard}>
              <div className={styles.memberAvatar} aria-hidden="true">
                <span>AV</span>
              </div>
              <div className={styles.memberInfo}>
                <h3 className="headline-md">Adib Vieira</h3>
                <p className={styles.memberRole}>Fundador e Estrategista</p>
                <p className={styles.memberBio}>
                  Lidera a estratégia da ALTA, conectando a visão de cada negócio
                  à execução técnica. Especialista em processos, eficiência
                  operacional e crescimento.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.cta}>
              <h2 className="headline-lg">
                Quer saber o que a ALTA pode fazer pela sua empresa?
              </h2>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                Agendar diagnóstico gratuito <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
