import { Layout } from "../components/layouts";

export default function Home() {
  // Esto de aqui es mejor manejarlo en el layout no en este archivo

  return (
    <Layout title="Home">
      <div className="notification is-primary">
        <button className="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
        efficitur.
      </div>
    </Layout>
  );
}
