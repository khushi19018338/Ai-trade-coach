import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function TeachingToggle() {
  return (
    <AnimatedCard>
    <div className="p-6 rounded-2xl bg-slate-900">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold">Teaching Mode</h4>
          <p className="text-sm text-slate-400">
            AI explains reasoning behind trades
          </p>
        </div>

        <input type="checkbox" className="w-6 h-6 accent-cyan-400" />
      </div>
    </div>
    </AnimatedCard>
  );
}
