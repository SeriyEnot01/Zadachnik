// Настройки подключения к вашей базе Supabase.
// Где взять: Supabase → ваш проект → Project Settings → API (или Connect).
// Ключ anon / publishable можно публиковать: он ничего не открывает без входа в аккаунт,
// а доступ к строкам ограничен правилами из setup.sql.
// НИКОГДА не вставляйте сюда service_role / secret key.
// Если оставить поля пустыми, приложение работает без синхронизации, только на устройстве.
window.ZADACHNIK_CONFIG = {
  url: "",      // например "https://abcdefghijkl.supabase.co"
  anonKey: ""   // длинная строка "eyJ..." (anon) или "sb_publishable_..."
};
