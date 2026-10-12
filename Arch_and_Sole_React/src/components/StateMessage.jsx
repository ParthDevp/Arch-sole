export default function StateMessage({ icon='bi-info-circle', title, text, action }) {
  return <div className="state-message text-center"><div className="state-icon"><i className={`bi ${icon}`}/></div><h3>{title}</h3><p>{text}</p>{action}</div>;
}
