import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function useProductFilterCard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [collapsed, setCollapsed] = useState(true);
  const rating = JSON.parse(searchParams.get("rating") || "0");
  const colors = JSON.parse(searchParams.get("colors") || "[]");
  const sales = JSON.parse(searchParams.get("sales") || "[]");
  const brands = JSON.parse(searchParams.get("brands") || "[]");
  const prices = JSON.parse(searchParams.get("prices") || "[0, 300]");

  const handleChangeSearchParams = (key, value) => {
    if (!key || !value) return;
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChangePrice = values => {
    handleChangeSearchParams("prices", JSON.stringify(values));
  };

  const handleChangeColor = value => {
    const values = colors.includes(value) ? colors.filter(item => item !== value) : [...colors, value];
    handleChangeSearchParams("colors", JSON.stringify(values));
  };

  const handleChangeBrand = value => {
    const values = brands.includes(value) ? brands.filter(item => item !== value) : [...brands, value];
    handleChangeSearchParams("brands", JSON.stringify(values));
  };

  const handleChangeSales = value => {
    const values = sales.includes(value) ? sales.filter(item => item !== value) : [...sales, value];
    handleChangeSearchParams("sales", JSON.stringify(values));
  };

  return {
    sales,
    brands,
    rating,
    colors,
    prices,
    collapsed,
    setCollapsed,
    handleChangePrice,
    handleChangeColor,
    handleChangeBrand,
    handleChangeSales,
    handleChangeSearchParams
  };
}