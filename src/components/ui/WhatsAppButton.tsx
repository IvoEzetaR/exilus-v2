"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${cleanNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
