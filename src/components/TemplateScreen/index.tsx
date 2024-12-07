interface ScreenProps {
  title: string;
  titleSize?: number;
  description: string;
  children: React.ReactNode;
}

export default function Screen({
  children,
  title,
  titleSize = 36,
  description,
}: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 md:p-8">
      <div className="flex flex-col items-center justify-between w-full h-full bg-slate-800 border-2 border-slate-600 rounded-lg max-w-3xl p-4 md:p-15 gap-16">
        <div className="flex flex-col items-center gap-4 text-center pb-8 border-b border-slate-600 w-full">
          <h1
            className={`text-slate-200 font-black tracking-tighter`}
            style={{ fontSize: titleSize }}
          >
            {title}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base ">{description}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
