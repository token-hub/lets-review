import "dotenv/config";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import { createId } from "@paralleldrive/cuid2";

async function main() {
    await prisma.topic.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    const hash_password = await bcrypt.hash(process.env.TEST_PASSWORD!, Number(process.env.NEXT_BCRYPT_SALT!));

    const correctAnswerId = createId();

    await prisma.user.create({
        data: {
            email: "john@gmail.com",
            name: "john",
            password: hash_password,
            topics: {
                create: [
                    {
                        name: "react",
                        questions: {
                            create: [
                                {
                                    question: "What is React?",
                                    answerId: correctAnswerId,
                                    answers: {
                                        create: [
                                            {
                                                answer: "It is an emotion",
                                            },
                                            {
                                                id: correctAnswerId,
                                                answer: "It is a frontend library use to create reusable UI components",
                                            },
                                            {
                                                answer: "It is a run time environment of javascript",
                                            },
                                            {
                                                answer: "It is used to create a loop",
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });

    console.log("Database seeded successfully!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
