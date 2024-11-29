import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function Heading({ title }: { title: string }) {
  return (
    <div className="absolute top-4 left-4 right-4 flex  items-center justify-between">
      <Link href="/dashboard">
        <ArrowLeftCircle className="text-white" size={30} />
      </Link>
      <h1 className="text-lg font-semibold uppercase text-white">{title}</h1>
    </div>
  );
}
