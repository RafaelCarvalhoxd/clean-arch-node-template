# Clean Architecture Node.js Template

A modern Node.js application template built with TypeScript following Clean Architecture principles.

## Features

- **TypeScript** for type safety and better developer experience
- **Clean Architecture** for maintainable and scalable code structure
- **Express** for the web server framework
- **Prisma ORM** for database operations
- **JWT Authentication** ready to use
- **Bcrypt** for password hashing
- **Environment Configuration** using dotenv
- **ESLint & Prettier** for code quality and formatting

## Project Structure

```
src/
├── domain/         # Enterprise business rules (entities, use cases)
├── application/    # Application business rules
├── infra/          # Adapters, configurations, and external services
└── presentation/   # Controllers, routes, and middleware
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (or your preferred database supported by Prisma)

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/clean-arch-node-template.git
cd clean-arch-node-template
```

2. **Install dependencies**

```bash
npm install
```

3. **Database Setup**

Create a `.env` file in the root directory with your database connection string:

```
DATABASE_URL="postgresql://username:password@localhost:5432/my_database"
JWT_SECRET="your-jwt-secret-key"
PORT=3000
```

4. **Generate Prisma Client**

```bash
npm run prisma:generate
```

5. **Run Migrations**

```bash
npm run prisma:migrate init
```

6. **Start Development Server**

```bash
npm run dev
```

The server will be available at http://localhost:3000 (or the PORT you specified in the .env file).

## Available Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm run start` - Starts the server in production mode
- `npm run dev` - Starts the server in development mode with auto-reload
- `npm run prisma:generate` - Generates Prisma client
- `npm run prisma:migrate` - Creates a new migration
- `npm run prisma:deploy` - Applies migrations to the database
- `npm run prisma:introspect` - Pulls the current database schema
- `npm run format` - Formats code with Prettier
- `npm run lint` - Runs ESLint with auto-fix

## Database Migrations

To create a new migration after changing the Prisma schema:

```bash
npm run prisma:migrate your_migration_name
```

## Deployment

1. Build the application:

```bash
npm run build
```

2. Deploy migrations to your production database:

```bash
npm run prisma:deploy
```

3. Start the server:

```bash
npm run start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
