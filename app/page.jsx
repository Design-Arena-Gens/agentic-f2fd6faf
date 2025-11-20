import Nav from '../components/Nav';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <header className="hero">
        <div className="container heroCard">
          <h1 className="heroTitle">Viajes tripulados a Marte</h1>
          <p className="heroSubtitle">
            ?Ficci?n o realidad? Aqu? tienes un resumen claro, honesto y actualizado
            sobre el estado del arte, los retos y el camino probable.
          </p>
          <div className="badges">
            <span className="badge">2025 ? Panorama</span>
            <span className="badge soft">Exploraci?n humana</span>
            <span className="badge warn">Riesgo alto</span>
          </div>
        </div>
      </header>

      <main>
        <Section id="intro" title="Lo esencial en 30 segundos">
          <div className="columns">
            <div>
              <p>
                Los viajes tripulados a Marte a?n no han ocurrido. La tecnolog?a avanza r?pido,
                con sistemas de lanzamiento de gran capacidad, h?bitats presurizados, propulsi?n
                m?s eficiente y soporte vital de larga duraci?n. Varias agencias y empresas tienen
                objetivos para la d?cada de 2030, pero el calendario depende de madurar seguridad,
                log?stica y financiaci?n.
              </p>
              <ul>
                <li><b>Estado actual</b>: misiones rob?ticas exitosas; tripuladas, en planificaci?n.</li>
                <li><b>Claves</b>: fiabilidad, protecci?n radiaci?n, entrada y aterrizaje (EDL), retorno.</li>
                <li><b>Costes</b>: cientos de miles de millones a escala programa.</li>
                <li><b>Riesgo</b>: significativo; mitigable con pruebas incrementales y redundancia.</li>
              </ul>
            </div>
            <div>
              <div className="card">
                <h3>?Ficci?n o realidad?</h3>
                <p>
                  Ambas. La <b>ficci?n</b> inspira ?pero simplifica?; la <b>realidad</b> exige
                  m?rgenes, redundancia y certificaci?n humana. A corto plazo veremos <b>misiones
                  de demostraci?n</b>; a medio plazo, <b>misiones tripuladas</b> si los hitos se
                  cumplen y los riesgos se ci?en a tolerancias aceptables.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cronologia" title="Cronolog?a probable (estimada)">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>2025?2029</h3>
              <ul>
                <li>Maduraci?n de megacohetes y reentradas a gran masa.</li>
                <li>Ensayos orbitales de naves con reabastecimiento en ?rbita.</li>
                <li>Demostraciones de EDL marciano con cargas crecientes.</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>2030?2035</h3>
              <ul>
                <li>Arquitecturas de misi?n integradas: carga + h?bitat + retorno.</li>
                <li>Pre?despliegue rob?tico (energ?a, comunicaciones, ISRU limitada).</li>
                <li>Primera ventana viable para misi?n tripulada de corta estancia.</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: 'span 12' }}>
              <h3>M?s all?</h3>
              <p>
                Si las primeras misiones resultan seguras y sostenibles, se ampliar?n estancias,
                se optimizar? ISRU (uso de recursos in?situ) y se reducir? el coste por ciclo.
              </p>
            </div>
          </div>
        </Section>

        <Section id="tecnologia" title="Tecnolog?a clave">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>Lanzadores y naves</h3>
              <ul>
                <li>Megacohetes reutilizables y reabastecimiento orbital.</li>
                <li>Escudos t?rmicos y control para EDL de gran tonelaje.</li>
                <li>Avi?nica segura con tolerancia a fallos y software verificado.</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>Vida y salud</h3>
              <ul>
                <li>Blindaje y h?bitats contra radiaci?n solar y c?smica.</li>
                <li>Reciclaje de aire/agua y nutrici?n estable a largo plazo.</li>
                <li>Contramedidas para microgravedad y aislamiento.</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>Superficie</h3>
              <ul>
                <li>Movilidad, energ?a (solar/nuclear) y comunicaciones robustas.</li>
                <li>ISRU: propulsores y consumibles a partir de la atm?sfera/agua local.</li>
                <li>Trabajos de construcci?n y mantenimiento con robots y EVA.</li>
              </ul>
            </div>
            <div className="card" style={{ gridColumn: 'span 6' }}>
              <h3>Retorno</h3>
              <ul>
                <li>Etapa de ascenso marciano confiable y acoplamiento orbital.</li>
                <li>Trayectorias eficientes y ventanas bien planeadas.</li>
                <li>Soporte de misi?n y abortos seguros donde sea posible.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="riesgos" title="Riesgos y c?mo mitigarlos">
          <div className="columns">
            <div>
              <ul>
                <li><b>Radiaci?n</b>: blindaje, tormentas solares, refugios y monitorizaci?n constante.</li>
                <li><b>EDL</b>: pruebas incrementales y validaci?n en vuelos no tripulados.</li>
                <li><b>Fallos de sistema</b>: redundancia y mantenimiento en vuelo/superficie.</li>
                <li><b>Factores humanos</b>: selecci?n, entrenamiento, apoyo psicol?gico.</li>
              </ul>
            </div>
            <div>
              <div className="card">
                <h3>Nivel de madurez</h3>
                <p className="muted">
                  Varios subsistemas est?n cerca de viabilidad operativa; la integraci?n
                  y certificaci?n para tripulaci?n es el cuello de botella principal.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="ficcion" title="Ficci?n vs realidad">
          <div className="columns">
            <div>
              <h3>Qu? suele simplificar la ficci?n</h3>
              <ul>
                <li>Viajes r?pidos sin restricciones de ventanas ni delta?v.</li>
                <li>Riesgos m?dicos acotados o ignorados.</li>
                <li>Log?stica ilimitada y fallos rar?simos.</li>
              </ul>
            </div>
            <div>
              <h3>Qu? exige la realidad</h3>
              <ul>
                <li>Gesti?n de masas, energ?as y tiempos realistas.</li>
                <li>Pruebas extensas, certificaci?n y m?rgenes operativos.</li>
                <li>Presupuestos y programas sostenidos durante a?os.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="faq" title="Preguntas frecuentes">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
            <div className="card" style={{ gridColumn: 'span 12' }}>
              <h3>?Cu?ndo pisar?n Marte los humanos?</h3>
              <p>
                La primera oportunidad realista podr?a darse en la d?cada de 2030 si se cumplen
                los hitos tecnol?gicos y de seguridad. No hay fecha garantizada.
              </p>
              <h3>?Cu?nto cuesta?</h3>
              <p>
                Depende de la arquitectura; a escala programa, el orden de magnitud son decenas
                a cientos de miles de millones repartidos en a?os.
              </p>
              <h3>?Por qu? ir?</h3>
              <p>
                Ciencia planetaria, impulso tecnol?gico, cooperaci?n internacional y visi?n a largo
                plazo de presencia humana multiplanetaria.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

