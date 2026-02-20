export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="badge">Taller mecánico de confianza</span>
        <h1>Taller mecánico Zavaleta</h1>
        <p className="subtitle">
          Soluciones rápidas para tu auto con explicación clara.
        </p>
        <p className="hero-notes">
          Revisión preventiva y correctiva para que vuelvas a rodar tranquilo.
        </p>
        <div className="cta">
          <a className="btn" href="tel:2281337319">Llámanos</a>
          <a
            className="btn wa"
            href="https://wa.me/2281337319"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn ghost" href="#ubicacion">Ver ubicación</a>
        </div>
        <div className="highlights grid grid-3">
          <div className="highlight">
            <strong>Mecánica general</strong>
            <span>Revisión completa de tu vehículo.</span>
          </div>
          <div className="highlight">
            <strong>Servicio express</strong>
            <span>Diagnóstico rápido para urgencias.</span>
          </div>
          <div className="highlight">
            <strong>Asesoría honesta</strong>
            <span>Explicamos lo necesario sin rodeos.</span>
          </div>
        </div>
      </header>

      <section className="section" id="servicios">
        <h2>Servicios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Cambio de aceite</h3>
            <p>Filtros y revisión de niveles.</p>
          </div>
          <div className="panel">
            <h3>Frenos y suspensión</h3>
            <p>Chequeo de balatas, amortiguadores y ruidos.</p>
          </div>
          <div className="panel">
            <h3>Diagnóstico de fallas</h3>
            <p>Revisión básica para detectar problemas.</p>
          </div>
        </div>
      </section>

      <section className="section" id="beneficios">
        <h2>Beneficios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Transparencia</h3>
            <p>Sabes exactamente qué se hará y por qué.</p>
          </div>
          <div className="panel">
            <h3>Experiencia local</h3>
            <p>Conocemos las necesidades de la zona.</p>
          </div>
          <div className="panel">
            <h3>Entrega a tiempo</h3>
            <p>Compromiso con fechas y seguimiento.</p>
          </div>
        </div>
      </section>

      <section className="section" id="testimonios">
        <h2>Testimonios</h2>
        <div className="grid grid-2">
          <blockquote className="quote">
            “Me dieron solución rápida y buen precio.”
            <span>— Francisco, cliente</span>
          </blockquote>
          <blockquote className="quote">
            “Atención honesta y trabajo bien hecho.”
            <span>— Miriam, vecina</span>
          </blockquote>
        </div>
      </section>

      <section className="section" id="horarios">
        <h2>Horario</h2>
        <div className="panel">
          <p>🕘 Lunes a Sábado: 8:00 am – 7:00 pm</p>
          <p>🕘 Domingo: 9:00 am – 2:00 pm</p>
          <p className="muted">(Horario sujeto a cambios, confirma tu visita)</p>
        </div>
      </section>

      <section className="section" id="ubicacion">
        <h2>Ubicación y contacto</h2>
        <div className="location-card grid grid-2">
          <div>
            <p>
              📍 Camino Antiguo a las Ánimas, Unidad Deportiva El Castillo, 91185
              Xalapa-Enríquez, Ver.
            </p>
            <ul>
              <li><strong>Teléfono:</strong> 228 133 7319</li>
              <li><strong>WhatsApp:</strong> 2281337319</li>
            </ul>
          </div>
          <div>
            <p>
              Estamos cerca de la Unidad Deportiva El Castillo. Llega por Camino
              Antiguo a las Ánimas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-banner">
          <div>
            <h3>Tu auto listo en manos confiables</h3>
            <p>Agenda una revisión y evita fallas inesperadas.</p>
          </div>
          <div className="cta">
            <a className="btn" href="tel:2281337319">Llamar</a>
            <a
              className="btn wa"
              href="https://wa.me/2281337319"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Hecho con cariño en Xalapa. ¡Te esperamos!</p>
      </footer>
    </main>
  );
}
