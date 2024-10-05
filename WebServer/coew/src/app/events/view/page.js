"use client";
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../../components/Sidebar'

export default function Home() {
    const searchParams = useSearchParams();
    const param1 = searchParams.get('param1');
    const param2 = searchParams.get('param2');

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Sidebar />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {param1}
                {param2}
            </main>
        </div>
    );
}
