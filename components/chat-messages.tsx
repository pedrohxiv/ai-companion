'use client';

import { useEffect, useRef, useState } from 'react';
import { Companion, Message } from '@prisma/client';

import { ChatMessage, type ChatMessageProps } from '@/components/chat-message';

interface ChatMessagesProps {
  companion: Companion & { messages: Message[]; _count: { messages: number } };
  isLoading: boolean;
  messages: ChatMessageProps[];
}

export const ChatMessages = ({
  companion,
  isLoading,
  messages = [],
}: ChatMessagesProps) => {
  const scrollRef = useRef<React.ElementRef<'div'>>(null);

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
        isLoading={fakeLoading}
        src={companion.src}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          src={companion.src}
        />
      ))}
      {isLoading && (
        <ChatMessage
          role="system"
          isLoading
          src={companion.src}
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};
