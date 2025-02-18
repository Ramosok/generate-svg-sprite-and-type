# generate-svg-sprite-and-type

Используйте инструмент для автоматизации, например, svg-sprite.

Установите svg-sprite:

npm install svg-sprite -g
  Поместите все SVG-файлы флагов в папку, например, folder/.

Создайте спрайт:
  svg-sprite --symbol --symbol-dest=. --symbol-sprite=sprite.svg folder/*.svg

Эта команда создаст файл sprite.svg, содержащий все флаги в виде <symbol>.

генерация типов 
  npm install xml2js --save-dev
Добавить в package.json 
   "generate-icon-types": "tsc ./generate-icon-types.ts && node ./generate-icon-types.js"
