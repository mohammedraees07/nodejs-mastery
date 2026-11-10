import crypto from "crypto";

const reqID = crypto.randomUUID();

console.log(`Request ID: ${reqID}`);

//crypto.randomBytes() : used for password reset, email verification, and other security-related tasks. It generates a random sequence of bytes that can be used as a token or key for secure operations.

const resetToken = crypto.randomBytes(16).toString("hex");

console.log(`Password Reset Token: ${resetToken}`);


//crypto.createHash : hashing is a one-way function that takes an input (or 'message') and returns a fixed-size string of bytes. The output is typically a 'digest' that is unique to each unique input. Hashing is commonly used for data integrity checks, password storage, and digital signatures.

const hash = crypto.createHash("sha256").update("raees").digest("hex");

console.log(`Hash of 'raees': ${hash}`);

//crypto.createHmac - hash based msg authentication code  (normal hash = data -> hash, hmac = data + secret key -> hash)

const secretKey = "mySecretKey";
const message = "Hello, World!";
const signature = crypto.createHmac("sha256", secretKey).update(message).digest("hex");

console.log(`HMAC of message '${message}': ${signature}`);
