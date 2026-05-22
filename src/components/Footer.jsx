import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brand}>
              <img src="/logo.png" alt="" className={styles.logo} aria-hidden="true" />
              <span className={styles.wordmark}>ALTA</span>
            </Link>
            <p className={styles.tagline}>Performance &amp; Growth</p>
            <p className={styles.location}>
              <MapPin size={14} aria-hidden="true" />
              Uberaba, MG — Brasil
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linkList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Serviços</h4>
            <ul className={styles.linkList}>
              <li><Link to="/servicos">Implementação de IA</Link></li>
              <li><Link to="/servicos">Treinamento de Equipe</Link></li>
              <li><Link to="/servicos">Diagnóstico Operacional</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Manifesto</h4>
            <p className={styles.manifesto}>
              A tecnologia não espera. Seu concorrente não vai esperar. A ALTA existe pra garantir que você não fique pra trás.
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ALTA. Todos os direitos reservados.</p>
          <p className={styles.bottomTag}>
            ALTA <span aria-hidden="true">|</span> Performance &amp; Growth
          </p>
        </div>
      </div>
    </footer>
  )
}
