export default function LoadingSkeleton({ cards = 3 }) {
  return <div className="row g-4">{Array.from({ length: cards }).map((_, i) => <div className="col-md-6 col-lg-4" key={i}><div className="skeleton-card"><div className="skeleton skeleton-image"/><div className="skeleton skeleton-line wide"/><div className="skeleton skeleton-line"/><div className="skeleton skeleton-line short"/></div></div>)}</div>;
}
