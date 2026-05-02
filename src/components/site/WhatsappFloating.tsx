import { whatsappContactUrl } from "@/lib/whatsapp";

const WhatsappIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.11 17.21c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.69.88-.85 1.06-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.18-.52-.31zM16 3C8.83 3 3 8.83 3 16c0 2.31.6 4.49 1.65 6.38L3 29l6.79-1.78A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.6c-1.99 0-3.85-.55-5.44-1.5l-.39-.23-4.03 1.06 1.08-3.93-.25-.41A10.55 10.55 0 0 1 5.4 16c0-5.85 4.75-10.6 10.6-10.6S26.6 10.15 26.6 16 21.85 26.6 16 26.6z" />
  </svg>
);

const WhatsappFloating = () => (
  <a
    href={whatsappContactUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter sur WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-smooth hover:scale-110 hover:shadow-glow md:h-16 md:w-16"
  >
    <WhatsappIcon />
    <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp/40 animate-ping" />
  </a>
);

export default WhatsappFloating;
export { WhatsappIcon };
