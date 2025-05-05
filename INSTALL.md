# Installation Guide for Coastal Geriatric Consulting Website

This guide will help you set up the Coastal Geriatric Consulting website locally for development or deployment.

## Prerequisites

- Node.js 20.x or higher
- PostgreSQL database
- Git

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atlasgrowth23/erin-website.git
   cd erin-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```

4. **Set up the database:**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Access the website:**
   The website should now be running at `http://localhost:5000`

## Project Structure

- `/client`: React frontend code
- `/server`: Express backend API
- `/db`: Database configuration and seed data
- `/shared`: Shared types and schemas used by both frontend and backend

## Deployment

The application can be deployed to any hosting service that supports Node.js applications. Make sure to set up the PostgreSQL database and configure the environment variables appropriately.