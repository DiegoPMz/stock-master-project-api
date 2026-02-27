import { AppLogo } from "@/shared/components/app-logo";

export function LoginLogo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-primary shadow-primary/25 flex size-12 items-center justify-center rounded-xl shadow-lg">
        <AppLogo />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-card-foreground text-balance text-xl font-bold tracking-tight">
          Bienvenido de nuevo
        </h1>
        <p className="text-muted-foreground text-sm">
          Ingresa tus credenciales para acceder
        </p>
      </div>
    </div>
  );
}
