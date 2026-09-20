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
          { label: 'RPG и классы', slug: 'wiki/rpg-and-classes' },
          { label: 'Земля и имущество', slug: 'wiki/claims' },
          { label: 'Create и строительство', slug: 'wiki/create-and-building' },
          { label: 'Фермерство и еда', slug: 'wiki/farming-and-food' },
          { label: 'Животные и разведение', slug: 'wiki/animals-and-breeding' },
          { label: 'Мебель и декор', slug: 'wiki/furniture-and-decor' },
          { label: 'Рыбалка и добыча', slug: 'wiki/fishing-and-loot' },
          { label: 'Снаряжение и инвентарь', slug: 'wiki/gear-and-inventory' },
          { label: 'Карта и голос', slug: 'wiki/map-and-voice' },
          { label: 'Смерть и возвращение', slug: 'wiki/death-and-graves' },
        ] },
        { label: 'Помощь', items: [
          { label: 'Правила', slug: 'rules' },
          { label: 'FAQ и неполадки', slug: 'faq' },
          { label: 'Изменения', slug: 'changelog' },
        ] },
      ],
    }),
  ],
});
