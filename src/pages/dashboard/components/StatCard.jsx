import AnimatedCard from "../../../components/ui/AnimatedCard";

export default function StatCard({ title, value, change }) {
  return (
    <AnimatedCard>
      <div className="card">
        <p className="stat-title">{title}</p>
        <h2 className="stat-value">{value}</h2>
        {change && (
          <p className={change.startsWith("+") ? "green" : "red"}>
            {change}
          </p>
        )}
      </div>
    </AnimatedCard>
  );
}
