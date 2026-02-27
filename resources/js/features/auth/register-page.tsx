import { Button } from "@/shared/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { AuthLayout } from "./auth-layout";
import { RegisterLogo } from "./register-logo";

interface registerFields {
  email: string;
  password: string;
  confirmed_password: string;
  full_name: string;
}

const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
  CONFIRMED_PASSWORD: "confirmed_password",
  FULL_NAME: "full_name",
} as const;

const emptyForm: registerFields = {
  email: "",
  password: "",
  confirmed_password: "",
  full_name: "",
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { post, data, setData, processing, errors } =
    useForm<registerFields>(emptyForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post("/register");
  };

  const isEmailInvalid = errors.email ? true : undefined;
  const isPasswordInvalid = errors.password ? true : undefined;
  const isNameInvalid = errors.full_name ? true : undefined;

  return (
    <AuthLayout>
      <RegisterLogo />
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xs flex-col gap-6">
        <FieldSet>
          <FieldGroup>
            {/* Name field */}
            <Field>
              <FieldLabel htmlFor={FIELDS.FULL_NAME}>Name</FieldLabel>
              <div className="relative">
                <User className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type="text"
                  id={FIELDS.FULL_NAME}
                  name={FIELDS.FULL_NAME}
                  value={data.full_name}
                  onChange={(e) => setData(FIELDS.FULL_NAME, e.target.value)}
                  disabled={processing}
                  aria-invalid={isNameInvalid}
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                  placeholder="Juan Perez"
                  autoComplete="name"
                />
              </div>
              {errors[FIELDS.FULL_NAME] && (
                <FieldError>{errors[FIELDS.FULL_NAME]}</FieldError>
              )}
            </Field>

            {/* Email Field */}
            <Field className="flex flex-col">
              <FieldLabel htmlFor={FIELDS.EMAIL}>Email</FieldLabel>
              <div className="relative">
                <Mail className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type="email"
                  id={FIELDS.EMAIL}
                  name={FIELDS.EMAIL}
                  value={data.email}
                  onChange={(e) => setData(FIELDS.EMAIL, e.target.value)}
                  disabled={processing}
                  aria-invalid={isEmailInvalid}
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>
              {errors[FIELDS.EMAIL] && (
                <FieldError>{errors[FIELDS.EMAIL]}</FieldError>
              )}
            </Field>

            {/* Password Field */}
            <Field className="flex flex-col">
              <FieldLabel htmlFor={FIELDS.PASSWORD}>Contraseña</FieldLabel>

              <div className="relative">
                <Lock className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type={showPassword ? "text" : "password"}
                  id={FIELDS.PASSWORD}
                  name={FIELDS.PASSWORD}
                  value={data.password}
                  onChange={(e) => setData(FIELDS.PASSWORD, e.target.value)}
                  disabled={processing}
                  aria-invalid={isPasswordInvalid}
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                  placeholder="********"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-card-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  aria-label={
                    showPassword ? "Ocultar contrasena" : "Mostrar contrasena"
                  }>
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              {errors[FIELDS.PASSWORD] && (
                <FieldError>{errors[FIELDS.PASSWORD]}</FieldError>
              )}
            </Field>

            {/* Confirmed_Password Field */}
            <Field className="flex flex-col">
              <FieldLabel htmlFor={FIELDS.CONFIRMED_PASSWORD}>
                Confirmar Contraseña
              </FieldLabel>

              <div className="relative">
                <Lock className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id={FIELDS.CONFIRMED_PASSWORD}
                  name={FIELDS.CONFIRMED_PASSWORD}
                  value={data.confirmed_password}
                  onChange={(e) =>
                    setData(FIELDS.CONFIRMED_PASSWORD, e.target.value)
                  }
                  disabled={processing}
                  aria-invalid={isPasswordInvalid}
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                  placeholder="Repite tu contrasena"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-muted-foreground hover:text-card-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  aria-label={
                    showConfirmPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }>
                  {showConfirmPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              {errors[FIELDS.CONFIRMED_PASSWORD] && (
                <FieldError>{errors[FIELDS.CONFIRMED_PASSWORD]}</FieldError>
              )}
            </Field>

            <Field>
              <Button
                type="submit"
                size="lg"
                disabled={processing || Object.values(data).some((v) => !v)}
                className="h-11 w-full font-semibold tracking-wide transition-all">
                {processing ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  "Crear Cuenta"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>

        {/* Global Error */}
        {errors.credentials && (
          <p className="text-destructive text-center text-sm font-medium">
            {errors.credentials}
          </p>
        )}

        <p className="text-muted-foreground text-center text-sm">
          Ya tienes una cuenta?
          <Link
            href="/login"
            className="text-primary hover:text-primary/80 font-semibold transition-colors">
            Inicia sesion
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
