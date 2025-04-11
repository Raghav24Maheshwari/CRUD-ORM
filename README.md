# 🔐 NestJS CRUD With ORM

A CRUD operation system built with **NestJS**, using **PostgreSQL**  This service allows users to do the crud operations efficiently.

---

## 🚀 Features

- ⚙️ **create user** for users
- 🧪 **get users** to see the listing of users (pagination and filteration applied)
- 🗄️ **PostgreSQL + TypeORM** for user details storage
- 📜 Fully typed with **DTOs** and validated inputs

---

## 🏗️ Tech Stack

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM

---

## 📦 Installation

```bash
# Clone the repo using ssh
git clone https://github.com/Raghav24Maheshwari/CRUD-ORM.git
```

# Install dependencies
```bash
npm install
```

# Setup environment variables
```bash
cp .env.example .env
```

# Fill in your PostgreSQL and SendGrid credentials

⚙️ Environment Variables
Create a .env file based on .env.example:
DATABASE_URL=postgres://username:password@localhost:5432/


# Run migrations
```bash
npm run migration:run
```

# Start in development mode
```bash
npm run start:dev
```

🔄 API Endpoints
```bash
POST	    /user	create  a user
GET	    /user	get all users
GET	    /user/:id	get users based on id
DELETE	    /user/:id	delete users based on id
UPDATE	    /user/:id	update users based on id
GET	    /user/admin to see all the users even those are deleted
