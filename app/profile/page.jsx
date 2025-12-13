"use client";

import Layout from "@/components/Layout";
import Card from "@/components/Card";


export default function ProfilePage() {
return (
<Layout title="Profile" subtitle="User information">
<Card>Name: John Doe</Card>
<Card>Email: john@example.com</Card>
</Layout>
);
}