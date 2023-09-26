# AI Companion - Plataforma de Conversação com Personagem IA

## Descrição do Projeto

O AI Companion é uma plataforma de conversação que permite aos usuários criar e simular conversas com personagens famosos e personalizados. Utilizando tecnologias de IA, essa plataforma oferece uma experiência única de interação com personagens virtuais. Os usuários criam seus personagens favoritos, e iniciam conversas envolventes em tempo real.

## Funcionalidades

### 1. Conversação com Personagens

A principal funcionalidade do AI Companion é a capacidade de iniciar conversas com personagens famosos ou personalizados. A plataforma utiliza a biblioteca `ai` versão `^2.1.32` para criar diálogos realistas e envolventes. Os usuários podem escolher entre uma variedade de personagens ou criar os seus próprios, dando vida às suas conversas imaginárias.

### 2. Personalização de Personagens

Os usuários têm a liberdade de personalizar seus personagens de acordo com suas preferências. Eles podem escolher o nome, personalidade e até mesmo definir as respostas do personagem para tornar as conversas ainda mais autênticas.

### 3. Integração com Cloudinary

O AI Companion integra-se perfeitamente com o Cloudinary, permitindo aos usuários fazer upload e gerenciar imagens e recursos visuais para personalizar seus personagens. Isso torna as conversas ainda mais envolventes e interativas.

### 4. Sistema de Autenticação

Para garantir a segurança e a privacidade dos usuários, o AI Companion utiliza o sistema de autenticação da biblioteca `@clerk/nextjs` versão `^4.23.2`. Os usuários podem criar contas, fazer login e gerenciar suas conversas de forma segura.

### 5. Sistema de Rate Limiting

Para evitar abusos na plataforma, foi implementado um sistema de rate limiting com a ajuda da biblioteca `@upstash/ratelimit` versão `^0.4.3`. Isso ajuda a controlar o número de solicitações feitas por um único usuário em um determinado período de tempo.

### 6. Sistema de Pagamento de Assinatura

Para oferecer a criação de um personagem, foi implementado um sistema de pagamento de assinatura. O plano gratuito oferece somente a interação com o personagem, enquanto o plano pago oferece a possibilidade da criação de um personagem. O sistema de pagamento utiliza a biblioteca `stripe` versão `^12.14.0` para processar os pagamentos de forma segura e confiável.

## Dependências

A seguir estão as principais dependências utilizadas no desenvolvimento do projeto:

- `@clerk/nextjs` v4.23.2
- `@hookform/resolvers` v3.1.1
- `@pinecone-database/pinecone` v0.1.6
- `@prisma/client` v5.1.1
- `@radix-ui/react-avatar` v1.0.3
- `@radix-ui/react-dialog` v1.0.4
- `@radix-ui/react-dropdown-menu` v2.0.5
- `@radix-ui/react-label` v2.0.2
- `@radix-ui/react-select` v1.2.2
- `@radix-ui/react-separator` v1.0.3
- `@radix-ui/react-toast` v1.1.4
- `@types/node` v20.4.7
- `@types/react` v18.2.18
- `@types/react-dom` v18.2.7
- `@upstash/ratelimit` v0.4.3
- `@upstash/redis` v1.22.0
- `ai` v2.1.32
- `autoprefixer` v10.4.14
- `axios` v1.4.0
- `class-variance-authority` v0.7.0
- `clsx` v2.0.0
- `eslint` v8.46.0
- `eslint-config-next` v13.4.12
- `langchain` v0.0.124
- `lucide-react` v0.263.1
- `next` v13.4.12
- `next-cloudinary` v4.17.1
- `next-themes` v0.2.1
- `openai` v4.3.1
- `openai-edge` v1.2.2
- `postcss` v8.4.27
- `prisma`: v5.1.1
- `query-string` v8.1.0
- `react` v18.2.0
- `react-dom` v18.2.0
- `react-hook-form` v7.45.4
- `react-spinners` v0.13.8
- `replicate` v0.12.3
- `stripe` v13.3.0
- `tailwind-merge` v1.14.0
- `tailwindcss` v3.3.3
- `tailwindcss-animate` v1.0.6
- `typescript` v5.1.6
- `zod` v3.21.4
- `zustand` v4.4.1

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu_valor_aqui
PINECONE_INDEX=seu_valor_aqui
PINECONE_ENVIRONMENT=seu_valor_aqui
PINECONE_API_KEY=seu_valor_aqui
UPSTASH_REDIS_REST_URL=seu_valor_aqui
UPSTASH_REDIS_REST_TOKEN=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
REPLICATE_API_TOKEN=seu_valor_aqui
STRIPE_API_KEY=seu_valor_aqui
STRIPE_WEBHOOK_SECRET=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. O projeto estará disponível em `http://localhost:3000`.
