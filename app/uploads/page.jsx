
"use client";

import Layout from "@/components/Layout";

export default function UploadPage() {
return (
<Layout title="Upload Repo" subtitle="Zip or Git URL">
<input className="input" placeholder="GitHub repo URL" />
<button className="btn-primary">Upload</button>
</Layout>
);
}