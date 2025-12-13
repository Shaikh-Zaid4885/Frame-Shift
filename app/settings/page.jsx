"use client";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

export default function SettingsPage() {
return (
<Layout title="Settings" subtitle="Account & preferences">
<Card>Theme</Card>
<Card>Security</Card>
</Layout>
);
}