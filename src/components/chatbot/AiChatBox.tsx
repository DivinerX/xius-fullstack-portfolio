import cn from "@/utils/cn";
import { useChat, Message } from "ai/react";
import { SendHorizonal, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const AiChatBox = () => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto px-3" ref={scrollRef}>
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}

        {isLoading && lastMessageIsUser && (
          <ChatMessage
            message={{
              id: "loading",
              role: "assistant",
              content: "Thinking...",
            }}
          />
        )}
        {error && (
          <ChatMessage
            message={{
              id: "error",
              role: "assistant",
              content: "Something went wrong",
            }}
          />
        )}
        {!error && messages.length === 0 && (
          <div className="flex flex-col h-full items-center justify-center gap-3 text-center mx-8">
            <Image
              src={"/images/logo.png"}
              width={55}
              height={55}
              alt="Loch"
              className="mx-auto"
            />
            <p className="text-lg  font-medium">
              Send a message to start the AI chat
            </p>
            <p>
              You can ask the chatbot any question about me and it will find the
              relevant information on this website
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="m-3 flex gap-1 items-center justify-center"
      >
        <button
          type="button"
          className="flex items-center justify-center w-18 flex-none"
          title="Clear chat"
          onClick={() => setMessages([])}
        >
          <Trash size={24} className="text-primary hover:text-rose-500" />
        </button>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          className="grow border rounded bg-background px-3 p-2"
          ref={inputRef}
        />
        <button
          type="submit"
          className="flex items-center justify-center w-18 flex-none disabled:opacity-50"
          disabled={input.length === 0}
          title="Submit message"
        >
          <SendHorizonal
            size={24}
            className="text-primary hover:text-rose-500"
          />
        </button>
      </form>
    </div>
  );
};

export default AiChatBox;

type ChatMessageProps = {
  message: Message;
};

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage && (
        // <Bot className="mr-2 flex-none" />
        <Image src={"/images/logo.png"} width={45} height={45} alt="Loch" />
      )}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage
            ? "font-semibold hover:bg-opacity-10 border-2 hover:bg-rose-500 border-rose-600 border-opacity-50  bg-background"
            : "bg-foreground text-background"
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary underline"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
