import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Link, useForm } from "@inertiajs/react";
import { Loader2, Lock, Mail } from "lucide-react";
import { FormEvent } from "react";
import { AuthLayout } from "./auth-layout";
import { LoginLogo } from "./login-logo";

interface LoginFields {
  email: string;
  password: string;
  remember: boolean;
}

const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
  REMEMBER: "remember",
} as const;

const EMPTY_FORM: LoginFields = {
  [FIELDS.EMAIL]: "",
  [FIELDS.PASSWORD]: "",
  [FIELDS.REMEMBER]: false,
};

const LoginPage = () => {
  const { post, data, setData, processing, errors } =
    useForm<LoginFields>(EMPTY_FORM);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post("/login");
  };

  const isEmailInvalid = errors.email ? true : undefined;
  const isPasswordInvalid = errors.password ? true : undefined;

  return (
    <AuthLayout>
      <LoginLogo />
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xs flex-col gap-6">
        <FieldSet>
          <FieldGroup>
            {/* Email Field */}
            <Field>
              <FieldLabel htmlFor={FIELDS.EMAIL}>Email</FieldLabel>
              <div className="relative">
                <Mail className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  id={FIELDS.EMAIL}
                  type="email"
                  name={FIELDS.EMAIL}
                  placeholder="tu@email.com"
                  value={data.email}
                  disabled={processing}
                  aria-invalid={isEmailInvalid}
                  autoComplete="email"
                  onChange={(e) => setData(FIELDS.EMAIL, e.target.value)}
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                />
              </div>
              {errors[FIELDS.EMAIL] && (
                <FieldError>{errors[FIELDS.EMAIL]}</FieldError>
              )}
            </Field>

            {/* Password Field */}
            <Field className="flex flex-col">
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={FIELDS.PASSWORD}>Contraseña</FieldLabel>
                <Link
                  href="/forgot-password"
                  className="text-primary hover:text-primary/80 text-xs font-medium transition-colors">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Lock className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  id={FIELDS.PASSWORD}
                  type="password"
                  name={FIELDS.PASSWORD}
                  value={data.password}
                  onChange={(e) => setData(FIELDS.PASSWORD, e.target.value)}
                  disabled={processing}
                  aria-invalid={isPasswordInvalid}
                  placeholder="********"
                  autoComplete="current-password"
                  className="bg-muted/50 border-border focus-visible:ring-primary/20 h-11 pl-10"
                />
              </div>
              {errors[FIELDS.PASSWORD] && (
                <FieldError>{errors[FIELDS.PASSWORD]}</FieldError>
              )}
            </Field>

            {/* Remember Me */}
            <Field
              orientation="horizontal"
              className="gap-2">
              <Checkbox
                id={FIELDS.REMEMBER}
                checked={data.remember}
                onCheckedChange={(checked) =>
                  setData(FIELDS.REMEMBER, !!checked)
                }
                disabled={processing}
              />
              <FieldLabel
                htmlFor={FIELDS.REMEMBER}
                className="text-muted-foreground cursor-pointer select-none text-sm font-normal">
                Recordarme
              </FieldLabel>
            </Field>

            {/* Submit Button */}
            <Field>
              <Button
                type="submit"
                size="lg"
                disabled={processing || !data.email || !data.password}
                className="h-11 w-full font-semibold tracking-wide transition-all">
                {processing ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
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
          ¿No tienes una cuenta?
          <Link
            href="/register"
            className="text-primary hover:text-primary/80 font-semibold transition-colors">
            Regístrate
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
