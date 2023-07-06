FROM qgis/qgis:final-3_28_5

ENV NODE_ENV=production

WORKDIR /turboGis
COPY ./package.json ./
COPY ./dist ./
COPY ./add_layer.py ./

RUN npm i

CMD ["node", "main.js"]