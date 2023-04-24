FROM node
LABEL "5986905" "5986905@alu.murciaeduca.es"
EXPOSE 5173
WORKDIR /app
COPY . .
RUN yarn install
ENTRYPOINT [ "yarn", "dev", "--host"]
