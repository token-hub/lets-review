import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createId } from "@paralleldrive/cuid2";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getGuestUser() {
    const user = localStorage.getItem("guestUser");

    if (!user) {
        const newUser = {
            id: createId(),
            isGuest: true,
        };

        localStorage.setItem("guestUser", JSON.stringify(newUser));
        return newUser;
    }

    return JSON.parse(user);
}
