import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center bg-slate-800 z-10">
      <Skeleton />
      <h1 className="text-white">Carregando</h1>
    </div>
  );
}
