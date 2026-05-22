import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { getService, SERVICES } from '../data/services.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/servicos" replace />

  const Icon = service.icon
  const others = SERVICES.filter(s => s.slug !== service.slug)
  const total = String(SERVICES.length).padStart(2, '0')

  return (
    <>
      {/* HEADER */}
      <section className={`page-header ${styles.hero}`}>
        <div className={styles.heroLines} aria-hidden="true" />
        <span className={styles.heroGhost} aria-hidden="true">{service.index}</span>
        <div className="container">
          <div className={styles.heroInner}>
            <Reveal>
              <nav className={styles.crumb} aria-label="Trilha">
                <Link to="/servicos">Serviços</Link>
                <span aria-hidden="true">/</span>
                <span className={styles.crumbCurrent}>{service.short}</span>
              </nav>
            </Reveal>
            <Reveal delay={60}>
              <div className={styles.heroHead}>
                <span className={styles.heroIcon}><Icon size={28} /></span>
                <span className={styles.heroIndex}>
                  Serviço {service.index} / {total}
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1>{service.title}</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="lead">{service.tagline}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.heroActions}>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  {service.free ? 'Agendar diagnóstico gratuito' : 'Falar sobre este serviço'}
                  <ArrowRight size={18} />
                </a>
                <Link to="/servicos" className="btn btn--ghost btn--large">
                  <ArrowLeft size={16} /> Todos os serviços
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={`section ${styles.problemSection}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <Reveal className={styles.colLabel}>
              <span className="mono-label">{service.problem.heading}</span>
            </Reveal>
            <div className={styles.colBody}>
              {service.problem.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className={styles.problemText}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className={`section ${styles.offerSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className="headline-md">{service.offer.heading}</h2>
            </Reveal>
            {service.offer.intro && (
              <Reveal delay={80}>
                <p className={styles.sectionIntro}>{service.offer.intro}</p>
              </Reveal>
            )}
          </div>
          <div className={styles.offerGrid}>
            {service.offer.items.map((item, i) => {
              const ItemIcon = item.icon
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <article className={styles.offerCard}>
                    <div className={styles.offerTop}>
                      <span className={styles.offerIcon}><ItemIcon size={22} /></span>
                      <span className={styles.offerNum}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="headline-sm">{item.title}</h3>
                    <p className="body-text">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      {service.process && (
        <section className={`section ${styles.processSection}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <Reveal>
                <h2 className="headline-md">{service.process.heading}</h2>
              </Reveal>
            </div>
            <ol className={styles.steps}>
              {service.process.steps.map((step, i) => {
                const StepIcon = step.icon
                return (
                  <Reveal key={step.title} as="li" delay={i * 80} className={styles.step}>
                    <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.stepIcon}><StepIcon size={20} /></span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </section>
      )}

      {/* OUTCOMES */}
      {service.outcomes && (
        <section className="section">
          <div className="container">
            <div className={styles.outcomeWrap}>
              <Reveal className={styles.outcomeHead}>
                <h2 className="headline-md">{service.outcomes.heading}</h2>
              </Reveal>
              <ul className={styles.outcomeList}>
                {service.outcomes.items.map((item, i) => (
                  <Reveal key={i} as="li" delay={i * 70} className={styles.outcomeItem}>
                    <span className={styles.outcomeCheck}><Check size={16} /></span>
                    <span>{item}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.cta}>
              <span className="mono-label mono-label--accent">Próximo passo</span>
              <h2 className="headline-lg">
                {service.free
                  ? 'O diagnóstico é gratuito. Bora começar?'
                  : 'Quer ver como isso se aplica à sua empresa?'}
              </h2>
              <p className={styles.ctaText}>
                Em 30 minutos, um especialista do nosso time entende sua operação e
                mostra exatamente onde este serviço gera resultado.
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
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section--tight">
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className="headline-sm">Outros serviços</h2>
            </Reveal>
          </div>
          <div className={styles.otherGrid}>
            {others.map((s, i) => {
              const OIcon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link to={`/servicos/${s.slug}`} className={styles.otherCard}>
                    <span className={styles.otherIcon}><OIcon size={20} /></span>
                    <span className={styles.otherIndex}>{s.index}</span>
                    <h3 className={styles.otherTitle}>{s.short}</h3>
                    <span className={styles.otherLink}>
                      Ver serviço <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
