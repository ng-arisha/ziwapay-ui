import StatCard from "./stat-card";

function Stats() {
  const stats = [
    {
      title: "10K+",
      value: "Active Merchants",
    },
    {
      title: "KES 50M+",
      value: "Processed Monthly",
    },
    {
      title: "999.9%",
      value: "Uptime Guarantee",
    },
    {
      title: "24/7",
      value: "Support Available",
    },
  ];
  return (
    <div className="px-4 md:px-40 lg:px-40 2xl:px-[30rem] bg-accent py-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* stats */}
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}

export default Stats;
