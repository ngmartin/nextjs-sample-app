"use client";
import { Layout } from "antd";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <Layout>
      <Layout.Header className="!text-white text-center">
        This is header
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer className="text-center">This is footer</Layout.Footer>
    </Layout>
  );
}
