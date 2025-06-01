import '../styles/InfoPanel.css';

export default function InfoPanel({ title, text, onClose }) {
  return (
    <div className="info-panel-backdrop" onClick={onClose}>
      <div className="info-panel" onClick={(e) => e.stopPropagation()}>
        <div className="info-content">
          <h2>{title}</h2>
          <p>{text}</p>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}


