import AnimatedCard from "../../../components/ui/AnimatedCard";
export default function PaperTradingCard() {
  return (
    <AnimatedCard>
      <div className="bg-[#0b1220] rounded-xl p-6 border border-green-500/30 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-cyan-400">₹50,000</h2>
          <p className="text-gray-400">Virtual Trading Balance</p>

          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-sm text-gray-400">Trades</p>
              <p className="font-bold">24</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Win Rate</p>
              <p className="font-bold text-green-400">67%</p>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-gradient-to-r from-cyan-400 to-green-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
          Start Paper Trading
        </button>
      </div>
    </AnimatedCard>
  );
}
