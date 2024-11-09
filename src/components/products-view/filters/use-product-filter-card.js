import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function useProductFilterCard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [collapsed, setCollapsed] = useState(true);
  const rating = JSON.parse(searchParams.get("rating") || "0");
  const tags = JSON.parse(searchParams.get("tags") || "[]");

  const handleChangeSearchParams = (key, value) => {
    if (!key || !value) return;
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChangeRating = values => {
    handleChangeSearchParams("rating", JSON.stringify(values));
  };

  const handleChangeTags = value => {
    const values = tags.includes(value) ? tags.filter(item => item !== value) : [...tags, value];
    handleChangeSearchParams("tags", JSON.stringify(values));
  };

  return {
    rating,
    collapsed,
    setCollapsed,
    handleChangeRating,
    handleChangeTags
  };
}