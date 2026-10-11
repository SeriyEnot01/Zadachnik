// Настройки подключения к вашей базе Supabase.
// Где взять: Supabase → ваш проект → Project Settings → API (или Connect).
// Ключ anon / publishable можно публиковать: он ничего не открывает без входа в аккаунт,
// а доступ к строкам ограничен правилами из setup.sql.
// НИКОГДА не вставляйте сюда service_role / secret key.
// Если оставить поля пустыми, приложение работает без синхронизации, только на устройстве.
window.ZADACHNIK_CONFIG = {
  url: "https://vvrbtojhkilogxxoiifh.supabase.co",      // например "https://abcdefghijkl.supabase.co"
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cmJ0b2poa2lsb2d4eG9paWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3NDY4NDcsImV4cCI6MjEwNzMyMjg0N30.I70Mgg-LNkBjA3ihsOoCXtTpvZPpTjErsJKm44aKpyY"   // длинная строка "eyJ..." (anon) или "sb_publishable_..."
};
