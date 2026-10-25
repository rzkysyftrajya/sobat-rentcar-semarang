import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { waHref, type WaContext } from "@/lib/whatsapp";

/** Tautan/CTA WhatsApp untuk konteks halaman tertentu. */
export function WhatsappLink({
  context,
  children,
  variant = "cta",
  size = "default",
  className,
  onClick,
}: {
  context: WaContext;
  children: React.ReactNode;
  variant?: "cta" | "outline-light" | "outline" | "secondary";
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}) {
  const href = waHref(context);

  if (!href) {
    return (
      <Button type="button" variant={variant} size={size} className={className} disabled>
        <MessageCircle aria-hidden="true" />
        Kontak belum terverifikasi
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <MessageCircle aria-hidden="true" />
        {children}
      </a>
    </Button>
  );
}
