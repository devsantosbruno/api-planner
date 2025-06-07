import nodemailer from "nodemailer";

export async function getMailClient() {
	const { user, pass } = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false,
		auth: {
			user,
			pass,
		},
	});

	return transporter;
}
