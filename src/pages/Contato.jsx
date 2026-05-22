import { useState } from 'react'
import { ArrowRight, MapPin, MessageCircle, ChevronDown, Clock } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import styles from './Contato.module.css'

const FAQ = [
  {
    q: 'O diagnóstico é mesmo gratuito?',
    a: 'Sim. Sem custo e sem compromisso. É uma conversa de 30 minutos com um especialista do nosso time.'
  },
  {
    q: 'Vocês atendem empresas de qualquer setor?',
    a: 'Sim. Nossas soluções se adaptam a diferentes setores. O diagnóstico identifica o que faz sentido pro seu negócio.'
  },
  {
    q: 'Preciso entender de tecnologia pra contratar a ALTA?',
    a: 'Não. Esse é o nosso trabalho. Você cuida do negócio, a gente cuida da tecnologia.'
  },
  {
    q: 'Vocês atendem fora de Uberaba?',
    a: 'Sim. Atendemos remotamente empresas de todo o Brasil.'
  }
]

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button
        className={styles.faqQ}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown size={20} className={styles.faqChevron} />
      </button>
      <div className={styles.faqA}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Contato() {
  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <Reveal>
              <h1>Fale com a gente</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                O primeiro passo é uma conversa. Sem compromisso, sem enrolação.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CANAL PRINCIPAL */}
      <section className="section">
        <div className="container">
          <div className={styles.mainCta}>
            <div className={styles.mainGlow} aria-hidden="true" />
            <div className={styles.mainInner}>
              <Reveal>
                <div className={styles.mainIcon}>
                  <MessageCircle size={28} />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="headline-lg">
                  Agende seu <br />
                  <span className="accent-text">diagnóstico gratuito</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className={styles.mainText}>
                  Em 30 minutos, um dos nossos especialistas analisa sua operação
                  e identifica onde estão as maiores oportunidades. Clique no botão
                  abaixo pra iniciar a conversa pelo WhatsApp.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  Conversar pelo WhatsApp <ArrowRight size={18} />
                </a>
              </Reveal>
              <Reveal delay={320}>
                <p className={styles.support}>
                  <Clock size={14} /> 30 minutos · Sem custo · Sem compromisso
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="section--tight">
        <div className="container">
          <div className={styles.infoGrid}>
            <Reveal>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MapPin size={22} /></div>
                <span className={styles.infoLabel}>Localização</span>
                <p className={styles.infoValue}>Uberaba, MG — Brasil</p>
                <p className={styles.infoMeta}>Atendemos remotamente todo o Brasil</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MessageCircle size={22} /></div>
                <span className={styles.infoLabel}>WhatsApp</span>
                <p className={styles.infoValue}>Resposta em até 24h</p>
                <p className={styles.infoMeta}>Canal principal de contato</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Clock size={22} /></div>
                <span className={styles.infoLabel}>Horário</span>
                <p className={styles.infoValue}>Seg — Sex, 9h às 18h</p>
                <p className={styles.infoMeta}>Horário de Brasília</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqLeft}>
              <Reveal>
                <h2 className="headline-lg">Perguntas frequentes</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className={styles.faqIntro}>
                  Ainda em dúvida? Mande sua pergunta direto pelo WhatsApp.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className={styles.faqList}>
              {FAQ.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
