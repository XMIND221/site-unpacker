export const WHATSAPP_NUMBER = "221776508080"; // +221 77 650 80 80
export const WHATSAPP_DISPLAY = "+221 77 650 80 80";

export function whatsappOrderUrl(productName: string) {
  const msg = `Bonjour, je suis intéressé par le produit : ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function whatsappContactUrl(message = "Bonjour WELMA GLOBAL, j'aimerais avoir plus d'informations.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
