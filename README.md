# Looking

Aplicação de reserva de hotéis utilizando Vue 3, Pinia, Typescript e Tailwind.

# Typescript

Optei por manter todas as interfaces em um só arquivo (index.ts) por brevidade da aplicação, embora o ideal fosse separar por entidades.

# Mock

O arquivo mock.ts possui duas funções que simulam chamadas para uma API.

# CI/CD

Como a aplicação já conta com deploy automático na Netlify, defini apenas a execução dos testes unitários no pipeline do Github Actions.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
