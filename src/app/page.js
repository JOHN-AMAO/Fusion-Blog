import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen  justify-between '>
      <div>
        <Link href='/'>Fusion</Link>
      </div>
    </main>
  );
}
