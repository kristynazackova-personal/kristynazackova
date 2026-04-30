<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## i18n (English / Czech)

The site is bilingual. The locale is resolved per-request:

1. `NEXT_LOCALE` cookie (set by the in-header language switcher), then
2. the `Accept-Language` header (Czech and Slovak map to `cs`, everything else to `en`),
3. otherwise `en`.

See `src/i18n/locale.ts` and `src/i18n/request.ts`. The provider wraps everything in `src/app/layout.tsx`.

### When you add new user-facing strings

Every string a user sees must come from `src/messages/en.json` and `src/messages/cs.json`. Both files must have matching keys.

- **Server components**: `const t = await getTranslations("namespace");` then `{t("key")}`.
- **Client components**: `const t = useTranslations("namespace");` then `{t("key")}`.
- **Embedded markup** (e.g. inline links): use `t.rich("key", { brand: (chunks) => <a>...</a> })` with the message containing `<brand>...</brand>` tags.
- **Plurals**: use ICU MessageFormat — `{count, plural, =1 {# project} other {# projects}}`. For Czech, include `few` for 2–4 (`{count, plural, =1 {# projekt} few {# projekty} other {# projektů}}`).

Translations can be a rough first pass — quality can be polished later — but **never ship a string in only one language**. Add the key to both files at the same time.

### Currently translated

- Layout chrome (nav, footer)
- The default landing page (`src/components/version-d.tsx`) and the venture card UI

### Not yet translated (English-only)

- A/B test variants `version-a.tsx`, `version-b.tsx`, `version-c.tsx` (only reachable via `?version=a|b|c`)
- Blog posts under `src/content/blog` (MDX) — these are long-form authored content and would need per-post translations or a different strategy

If you add features in either of those areas, follow the same pattern: extract strings into the messages files and look them up via `useTranslations` / `getTranslations`.
