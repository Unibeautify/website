FROM netlify/build

# COPY .nvmrc package.json package-lock.json ./
# RUN npm install && \
#     npm run docs

# COPY website/package.json website/package-lock.json ./website/
# RUN cd website/ && \
#     npm install

# COPY ./ ./
# RUN npm run build

WORKDIR /opt/repo
COPY ./ ./
RUN ls -la ./scripts/
# RUN build ls -la scripts
RUN build ./scripts/netlify.sh
