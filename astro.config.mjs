import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://marehori.github.io',
  base: '/likenostalgia-mc-server-client',
  integrations: [
    starlight({
      title: 'Likenostalgia',
      description: 'Живой RPG SMP на Minecraft Fabric.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/marehori/likenostalgia-mc-server-client',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/marehori/likenostalgia-mc-server-client/edit/main/',
      },
      sidebar: [
        { label: 'Начало', items: [
          { label: 'Скачать клиент', slug: 'download' },
          { label: 'Первый запуск', slug: 'getting-started' },
        ] },
        { label: 'Wiki', items: [
          { label: 'С чего начать в мире', slug: 'wiki' },
          { label: 'Мир и прогресс', slug: 'wiki/world-and-progress' },
          { label: 'Структуры и данжи', slug: 'wiki/exploration-and-dungeons' },
          { label: 'RPG и классы', slug: 'wiki/rpg-and-classes' },
          { label: 'Бой, чары и экипировка', slug: 'wiki/combat-and-enchanting' },
          { label: 'Земля и имущество', slug: 'wiki/claims' },
          { label: 'Create и строительство', slug: 'wiki/create-and-building' },
          { label: 'Фермерство и еда', slug: 'wiki/farming-and-food' },
          { label: 'Животные и разведение', slug: 'wiki/animals-and-breeding' },
          { label: 'Мебель и декор', slug: 'wiki/furniture-and-decor' },
          { label: 'Рыбалка Go Fish', slug: 'wiki/go-fish' },
          { label: 'Добыча и походы', slug: 'wiki/fishing-and-loot' },
          { label: 'Снаряжение и инвентарь', slug: 'wiki/gear-and-inventory' },
          { label: 'Карта и голос', slug: 'wiki/map-and-voice' },
          { label: 'Повседневные удобства', slug: 'wiki/everyday-tools' },
          { label: 'Каталог игровых модов', slug: 'wiki/mods-catalog' },
          { label: 'Смерть и возвращение', slug: 'wiki/death-and-graves' },
        ] },
        { label: 'Помощь', items: [
          { label: 'Правила', slug: 'rules' },
          { label: 'FAQ и неполадки', slug: 'faq' },
          { label: 'Изменения', slug: 'changelog' },
        ] },
        { label: 'Модерация', items: [
          { label: 'Рабочий регламент', slug: 'staff' },
          { label: 'Доступ, Auth и роли', slug: 'staff/access-and-roles' },
          { label: 'Инциденты и Ledger', slug: 'staff/incidents-and-ledger' },
          { label: 'Мир, приваты и операции', slug: 'staff/world-and-operations' },
        ] },
      ],
    }),
  ],
});
