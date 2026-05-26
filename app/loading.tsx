export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--background)] text-[var(--dark)]">
      <div className="text-center">
        <h1 className="text-4xl tracking-[0.4em] mb-4">NUVÉ</h1>
        <div className="w-28 h-[1px] bg-[var(--dark)] mx-auto animate-pulse" />
      </div>
    </div>
  );
}