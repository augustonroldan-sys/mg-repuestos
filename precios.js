/* ═══════════════════════════════════════════════════════════════
   PRECIOS — MG Repuestos
   ═══════════════════════════════════════════════════════════════
   Productos SIN precio muestran "Consultar precio" (el cliente
   pregunta por WhatsApp). Productos CON precio se agregan al
   carrito y se compran directo.

   ¿Cómo cargar un precio?
   1. Abrí catalogo.html, buscá el producto — el ID aparece en la
      tarjeta (ej: p2-0).
   2. Agregá una línea acá: "ID": PRECIO,
════════════════════════════════════════════════════════════════ */

const PRECIOS = {
  // "p2-0": 45000,
};

const CONFIG = {
  whatsapp: "5493329201168",
  // Link de pago de Mercado Pago (opcional)
  mercadopago: "",
};
