// scripts/generate-icon-types.ts
import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';

// Путь к спрайту
const spritePath = path.resolve(
  __dirname,
  'src/components/Inputs/InputPhone/components/SpriteFlagDisplay/sprite/sprite.svg'
);

// Чтение и парсинг спрайта
fs.readFile(spritePath, 'utf-8', async (err, data) => {
  if (err) throw err;

  const result = await parseStringPromise(data);
  const symbols = result.svg.symbol;

  // Извлечение id
  const iconIds = symbols.map((symbol: any) => symbol.$.id);

  // Генерация TypeScript-типов
  const types = `export type IconName = ${iconIds.map((id: string) => `'${id}'`).join(' | ')};`;

  // Запись типов в файл
  fs.writeFileSync(
    path.resolve(
      __dirname,
      'src/components/Inputs/InputPhone/components/SpriteFlagDisplay/sprite/icon-types.ts'
    ),
    types
  );
  console.log('Icon types generated successfully!');
});
