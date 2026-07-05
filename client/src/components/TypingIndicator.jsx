import { LoaderCircle } from "lucide-react";

function TypingIndicator({ loading }) {
  if (!loading) return null;

  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-3 rounded-2xl rounded-bl-sm bg-slate-800 px-4 py-3">
        <LoaderCircle size={18} className="animate-spin text-blue-400" />

        <span className="text-sm text-slate-300">AI is typing...</span>
      </div>
    </div>
  );
}

export default TypingIndicator;
