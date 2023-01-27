import { Layout } from "../components/layouts";
import { Carousel } from "@/components/ui";
import Image from "next/image";

export default function VicTest() {
  const node = (
    <>
      <Image
        src={"https://bulma.io/images/bulma-logo.png"}
        alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
        width={112}
        height={28}
      />
    </>
  );
  const otro = (
    <>
      <h3>Holi</h3>
    </>
  );
  const nodes = [node, node, otro, node];

  return (
    <Layout title="Testing">
      <Carousel slides={nodes} />
    </Layout>
  );
}
