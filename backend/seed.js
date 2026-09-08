import bcrypt from 'bcryptjs';
import prisma from './src/prisma.js';

async function seed() {
  const username = 'admin';
  const password = 'password123';
  
  const existingUser = await prisma.user.findUnique({ where: { username } });
  if (existingUser) {
    console.log('Admin user already exists.');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  console.log(`Admin user created! Username: ${username}, Password: ${password}`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
