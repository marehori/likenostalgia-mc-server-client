# Likenostalgia

Публичный сайт и wiki сервера Likenostalgia, а также место для релизов клиентского пакета.

## Сайт

GitHub Pages публикуется автоматически после push в `main`. В настройках репозитория выберите **Settings → Pages → Source: GitHub Actions**.

## Клиентский ZIP

Не добавляйте клиентский ZIP в Git. Для выпуска:

1. Откройте **Actions → Create client release → Run workflow** и создайте черновик релиза `v1.0`.
2. Откройте созданный черновик на странице **Releases**.
3. Прикрепите `Likenostalgia-26.2-Client-v1.0.zip` как asset и опубликуйте релиз.

Сайт ведёт пользователей на страницу актуального релиза.

## Локальная разработка

```bash
pnpm install
pnpm run dev
```
