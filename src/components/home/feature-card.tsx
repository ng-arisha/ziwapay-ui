import { LucideIcon } from "lucide-react";

function FeatureCard({Icon,title,description}:{Icon:LucideIcon,title:string,description:string}) {
  return (
    <div className="bg-accent/5 px-6 py-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center">
      <div className="h-20 w-20 mb-6 bg-secondary rounded-full flex justify-center items-center">
        <Icon size={40} className="text-primary" />
      </div>
      <h1 className="text-dark text-lg lg:text-2xl 2xl:text-3xl font-bold pb-6">
        {title}
      </h1>
      <p className="text-center 2xl:px-20">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
