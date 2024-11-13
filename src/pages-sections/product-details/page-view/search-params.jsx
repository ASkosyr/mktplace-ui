import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectedSearchParams() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const tags = JSON.parse(searchParams.get("tags") || "[]");
    const rating = searchParams.get("rating");

    console.log("SelectedSearchParams: " + JSON.stringify(searchParams));

    const handleDelete = (key) => {
        const params = new URLSearchParams(searchParams);
        params.delete(key);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Box display="flex" flexWrap="wrap" gap={1}>
            {category && (
                <Chip
                    label={`Category: ${category}`}
                    onDelete={() => handleDelete("category")}
                    sx={{ backgroundColor: 'gray', color: 'white' }}
                />
            )}
            {tags.map((tag) => (
                <Chip
                    key={tag}
                    label={`Tag: ${tag}`}
                    onDelete={() => {
                        const newTags = tags.filter((t) => t !== tag);
                        const params = new URLSearchParams(searchParams);
                        params.set("tags", JSON.stringify(newTags));
                        router.push(`${pathname}?${params.toString()}`);
                    }}
                    sx={{ backgroundColor: 'gray', color: 'white' }}
                />
            ))}
            {rating && (
                <Chip
                    label={`Rating: ${rating}`}
                    onDelete={() => handleDelete("rating")}
                    sx={{ backgroundColor: 'gray', color: 'white' }}
                />
            )}
        </Box>
    );
}