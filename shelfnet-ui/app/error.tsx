"use client";

import { useEffect } from "react";
import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="glow-grid" aria-hidden />
      <div className="card relative z-10 w-full max-w-xl space-y-6 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-sky-400">
          ShelfNet · Error
        </p>
        <h1 className="text-4xl font-black text-white">
          Что-то пошло не так
        </h1>
        <p className="text-base text-slate-300">
          Произошла непредвиденная ошибка. Мы уже знаем о ней — вы можете
          попробовать обновить страницу или вернуться на главную.
        </p>
        {error.digest && (
          <p className="text-xs text-slate-500">
            Код ошибки:{" "}
            <span className="font-mono text-slate-400">{error.digest}</span>
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-sky-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Попробовать снова
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-800 px-5 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
