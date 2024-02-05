import { format } from "date-fns"
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header />

      <h2>Olá, Miguel</h2>
      <p className="capitalize">
        {format(new Date(), "EEEE',' dd 'de' MMMM", {
        locale: ptBR,
      })}
      </p>
    </div>
  );
}

