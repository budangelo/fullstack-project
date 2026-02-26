const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

export const getToken = () => localStorage.getItem("tepui_token");

export const getPublicPills = async () => {
    const r = await fetch(`${API_URL}/pills/public`);
    if (!r.ok) throw new Error("public pills error");
    return r.json();
};

export const getPrivatePills = async () => {
    const token = getToken();
    if (!token) throw new Error("missing token");
    const r = await fetch(`${API_URL}/private/pills`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (!r.ok) throw new Error("private pills error");
    return r.json();
};

export const downloadExcel = async (name) => {
    const token = getToken();
    if (!token) throw new Error("missing token");
    const r = await fetch(`${API_URL}/private/excel/${name}`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!r.ok) throw new Error("download error");

    const blob = await r.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.xlsx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
};