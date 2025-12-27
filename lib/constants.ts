export const BYCRYPT_SALT = Number(process.env.BYCRYPT_SALT) || 10;

export const signUpDefaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const signInDefaultValues = {
    email: "",
    password: "",
};

export const questionsCountDefaultValue = [10, 15, 30, 100];

export const boxOwner = ["topics", "questionCount"] as const;
