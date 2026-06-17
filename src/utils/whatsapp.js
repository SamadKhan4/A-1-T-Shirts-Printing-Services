const phone = "919653163441";

export function whatsappLink(message = "Hi A1 Tshirts & printing Services, I want a quote for custom merchandise.") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
