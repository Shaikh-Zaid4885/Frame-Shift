
"use client";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

export default function MigrationDetail({ params }) {
return (
<Layout title={`Migration ${params.id}`} subtitle="Live status & logs">
<Card>Status: Running</Card>
<Card>Logs loading...</Card>
</Layout>
);
}