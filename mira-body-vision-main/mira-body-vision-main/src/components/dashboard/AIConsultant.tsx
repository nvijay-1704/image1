
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIConsultantProps {
  className?: string;
}

const AIConsultant = ({ className }: AIConsultantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello, I\'m your Bio_Twin_X AI medical consultant. How can I help you with the current scan?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const mockResponses: Record<string, string> = {
        default: "I've analyzed the scan data. What specific aspect would you like me to focus on?",
        damage: "Based on the current scan, I can detect an internal hemorrhage in the lower abdominal region. The bleeding appears to be moderate but requires immediate attention. I recommend focusing treatment on the splenic region.",
        treatment: "For the detected internal hemorrhage, I recommend immediate administration of tranexamic acid to control bleeding, followed by fluid resuscitation with crystalloids. The patient should be prepared for possible surgical intervention if the bleeding doesn't subside.",
        severity: "The current internal hemorrhage is classified as Grade II, with an estimated blood loss of 750-1000ml. This represents a moderate severity level but requires prompt intervention to prevent progression to a critical state.",
      };
      
      let responseText = mockResponses.default;
      const query = userMessage.content.toLowerCase();
      
      if (query.includes("damage") || query.includes("injury") || query.includes("bleeding")) {
        responseText = mockResponses.damage;
      } else if (query.includes("treatment") || query.includes("recommend")) {
        responseText = mockResponses.treatment;
      } else if (query.includes("severity") || query.includes("critical")) {
        responseText = mockResponses.severity;
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader>
        <CardTitle>AI Medical Consultant</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-max max-w-[80%] rounded-lg px-4 py-2",
                message.role === 'user'
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              <div>
                <p className="text-sm">{message.content}</p>
                <span className="text-xs text-muted-foreground/50 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex w-max max-w-[80%] rounded-lg px-4 py-2 bg-muted">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                <div className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse delay-150"></div>
                <div className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about detected issues or recommended treatments..."
            className="flex-1"
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button size="icon" onClick={handleSendMessage} disabled={loading || !inputValue.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIConsultant;
