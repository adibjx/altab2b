import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { SERVICES } from '../data/services.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import styles from './Servicos.module.css'

export default function Servicos() {
  return (
    <>
      {/* HEADER */}
      <section className={`page-header ${styles.pageHero}`}>
        <div className="container">
          <div className="page-header__inner">
            <Reveal>
              <h1>Serviços</h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="lead">
                Estratégia, inteligência artificial e execução de ponta a ponta.
                Cada solução é desenhada para o seu negócio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link to={`/servicos/${s.slug}`} className={styles.row}>
                    <span className={styles.rowIndex}>{s.index}</span>
                    <span className={styles.rowIcon}><Icon size={26} /></span>
                    <div className={styles.rowBody}>
                      <h2 className={styles.rowTitle}>
                        {s.title}
                        {s.free && <span className={styles.freeTag}>Gratuito</span>}
                      </h2>
                      <p className={styles.rowText}>{s.summary}</p>
                    </div>
                    <span className={styles.rowArrow} aria-hidden="true">
                      <ArrowUpRight size={22} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.finalCta}>
              <span className="mono-label mono-label--accent">Não sabe por onde começar?</span>
              <h2 className="headline-lg">
                Não sabe qual solução é a certa pra sua empresa?
              </h2>
              <p className={styles.finalText}>
                Normal. É exatamente por isso que o diagnóstico existe. Conversamos,
                entendemos seu negócio e recomendamos o caminho.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                Fale com um especialista <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
