"use client";

import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Card from "@/components/Card";

export default function MigrationsPage() {
const router = useRouter();
return (
<Layout title="Migrations" subtitle="Track all migrations">
{[1,2,3].map(id=> (
<Card key={id} onClick={()=>router.push(`/migrations/${id}`)}>
Migration #{id}
</Card>
))}
</Layout>
);
}