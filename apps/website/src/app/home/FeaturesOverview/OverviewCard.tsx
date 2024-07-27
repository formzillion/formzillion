export default function OverviewCard({
  title,
  description,
  illustration,
}: {
  title: string;
  description: string;
  illustration: React.ReactNode;
}) {
  return (
    <div className="flex flex-col item-center justify-center bg-slate-100 text-center text-gray-700 p-5 pt-10">
      <div className="font-bold font-['Space_Grotesk'] text-3xl">{title}</div>
      <div className="opacity-50 text-xl font-medium leading-normal font-['Satoshi'] mt-5">
        {description}
      </div>
      <div className="mt-10">{illustration}</div>
    </div>
  );
}
