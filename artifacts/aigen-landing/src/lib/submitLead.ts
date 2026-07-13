export interface LeadData {
  name: string;
  phone: string;
  subject?: string;
  program?: string;
  comment?: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка отправки");
  }
}
