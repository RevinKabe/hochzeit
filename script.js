// Calendar-day countdown in the wedding's time zone. No guessed ceremony time.
const dayParts = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit'
}).formatToParts(new Date());
const part = (type) => Number(dayParts.find((item) => item.type === type).value);
const today = Date.UTC(part('year'), part('month') - 1, part('day'));
const remaining = Math.round((Date.UTC(2026, 11, 17) - today) / 86400000);
const countdown = document.getElementById('countdown');
if (remaining > 0) {
  document.getElementById('days').textContent = remaining;
  document.getElementById('countdown-label').textContent = remaining === 1 ? 'Tag bis zu unserem Ja' : 'Tage bis zu unserem Ja';
  countdown.hidden = false;
} else if (remaining === 0) {
  document.getElementById('days').textContent = 'Heute';
  document.getElementById('countdown-label').textContent = 'sagen wir Ja!';
  countdown.hidden = false;
}
