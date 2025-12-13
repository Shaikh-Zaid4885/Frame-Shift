"use client";

import Layout from "@/components/Layout";

export default function NewMigration() {
return (
<Layout title="New Migration" subtitle="Upload repository">
<input className="input" type="file" />
<button className="btn-primary">Start</button>
</Layout>
);
}