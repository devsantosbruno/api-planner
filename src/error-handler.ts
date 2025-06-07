import type { FastifyInstance } from "fastify";
import { hasZodFastifySchemaValidationErrors } from "fastify-type-provider-zod";
import { ClientError } from "./errors/client-errors";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
	if (hasZodFastifySchemaValidationErrors(error)) {
		const formattedErrors = error.validation.map((err) => {
			return {
				field: err.instancePath?.replace("/", ""),
				message: err.message,
			};
		});

		return reply.status(400).send({
			message: "Invalid input",
			errors: formattedErrors,
		});
	}

	if (error instanceof ClientError) {
		return reply.status(400).send({
			message: error.message,
		});
	}

	return reply.status(500).send({ message: "Internal Server Error" });
};
