import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { cpf } from "cpf-cnpj-validator";

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: "isCPF",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown, args: ValidationArguments): boolean {
          if (typeof value !== "string") return false;

          const regexFormatoCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

          if (!regexFormatoCpf.test(value)) return false;

          return cpf.isValid(value);
        },
        defaultMessage(args: ValidationArguments): string {
          return "O CPF informado deve estar no formato 000.000.000-00 e ser válido.";
        },
      },
    });
  };
}
