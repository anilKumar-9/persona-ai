function Message({ role, content, persona }) {
  const isUser = role === "user";
  const label = isUser ? "You" : persona || "AI";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-3
          py-3
          text-sm
          sm:max-w-[75%]
          sm:px-4
          sm:text-base
          shadow-md
          ${
            isUser
              ? "bg-blue-600 text-white rounded-br-sm"
              : "bg-slate-800 text-slate-100 rounded-bl-sm"
          }
        `}
      >
        <p className="mb-1 text-xs font-semibold opacity-70">{label}</p>

        <p className="whitespace-pre-wrap wrap-break-word">{content}</p>
      </div>
    </div>
  );
}

export default Message;
