function StatCard({title,value}:{title:string,value:string}) {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold text-primary text-5xl">{title}</h1>
      <p className="text-primary text-lg py-4">{value}</p>
    </div>
  );
}

export default StatCard;
