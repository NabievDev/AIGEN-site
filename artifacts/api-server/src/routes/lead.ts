import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

interface LeadBody {
  name: string;
  phone: string;
  subject?: string;
  program?: string;
  comment?: string;
}

router.post("/lead", async (req, res) => {
  const { name, phone, subject, program, comment } = req.body as LeadBody;

  if (!name?.trim() || !phone?.trim()) {
    res.status(400).json({ error: "Имя и телефон обязательны" });
    return;
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    logger.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — lead not forwarded");
    res.json({ ok: true });
    return;
  }

  const lines = [
    "🎓 *Новая заявка — ФениксУм*",
    "",
    `👤 *Имя:* ${name}`,
    `📞 *Телефон:* \`${phone}\``,
    subject  ? `📚 *Предмет:* ${subject}`    : null,
    program  ? `🎯 *Программа:* ${program}`  : null,
    comment  ? `💬 *Комментарий:* ${comment}` : null,
  ];

  const text = lines.filter(Boolean).join("\n");

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
      },
    );

    if (!tgRes.ok) {
      const body = await tgRes.text();
      logger.error({ status: tgRes.status, body }, "Telegram API error");
    } else {
      logger.info({ name, phone }, "Lead forwarded to Telegram");
    }
  } catch (err) {
    logger.error({ err }, "Failed to reach Telegram API");
  }

  res.json({ ok: true });
});

export default router;
