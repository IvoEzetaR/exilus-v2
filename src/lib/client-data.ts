// Datos del cliente Exilus — fuente única de verdad
// Actualizar este archivo cuando el cliente confirme cambios

export const CLIENT = {
  name: "Exilus",
  fullName: "Exilus — Cirugía Bariátrica",
  doctor: "Dr. Víctor Augusto Salazar Tantaleán",
  doctorRole: "Cirujano Bariatra y Laparoscopista · Director Médico",
  phone: "+51 972 652 353",
  whatsapp: "https://wa.me/51972652353",
  email: "draugustosalazar@gmail.com",
  address: "Calle Los Laureles 436, Of. 403, Urb. California — Clínica Sanna Sánchez Ferrer, Trujillo",
  city: "Trujillo, Perú",
  booking: "https://link.zolutium.com/widget/booking/FXaMnbH4YeUBA4p1iZ1n",
  social: {
    instagram: "https://www.instagram.com/exilus.pe",
    facebook: "https://www.facebook.com/share/1AkrG21Ddq/",
    tiktok: "https://www.tiktok.com/@draugustosalazar",
  },
} as const;

export type ClientData = typeof CLIENT;
