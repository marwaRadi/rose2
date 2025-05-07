import AuthProvider from "./providers/AuthProvider";
import CounterProvider from "./providers/CounterProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CounterProvider>{children}</CounterProvider>
    </AuthProvider>
  );
}

export default Providers;
