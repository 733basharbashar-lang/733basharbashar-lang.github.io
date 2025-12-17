let total = 0;
const WHATSAPP = "967733971941";

function add(price) {
  total += price;
  document.getElementById("total").innerText = "الإجمالي: " + total + " ريال";
}

function sendOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  if (!name || !phone) return alert("اكتب الاسم ورقمك");

  navigator.geolocation.getCurrentPosition(pos => {
    const loc = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
    let msg =
      `طلب جديد\n` +
      `الاسم: ${name}\n` +
      `الجوال: ${phone}\n` +
      `الإجمالي: ${total} ريال\n` +
      `الموقع:\n${loc}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`);
  }, () => alert("اسمح بتحديد الموقع"));
}
