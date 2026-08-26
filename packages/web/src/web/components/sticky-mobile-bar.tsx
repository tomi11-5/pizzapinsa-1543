import { Phone, ShoppingBag } from "lucide-react";

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[var(--cream)] border-t border-[var(--gold)]/30 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3">
      <a
        href="tel:+34681152609"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--tomato)] text-[var(--tomato)] py-3 font-body font-semibold"
      >
        <Phone size={18} /> Llamar
      </a>
      <a
        href="#pedir"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--tomato)] text-white py-3 font-body font-semibold"
      >
        <ShoppingBag size={18} /> Pedir online
      </a>
    </div>
  );
}
