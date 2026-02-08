import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products — MyGold Tea",
  description:
    "Explore our full range of premium Malawian tea products — from export quality blends to convenient tea bags, cookies, rice and more.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
