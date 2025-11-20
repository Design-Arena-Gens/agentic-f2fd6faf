export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          ? {new Date().getFullYear()} Marte?Humano ? Proyecto informativo en espa?ol.
        </div>
        <div className="muted">
          Hecho con Next.js. Fuente: agencias y publicaciones aeroespaciales (NASA, ESA, CNSA), empresas privadas (SpaceX), y literatura cient?fica.
        </div>
      </div>
    </footer>
  );
}

