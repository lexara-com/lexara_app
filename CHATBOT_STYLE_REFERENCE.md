# Chatbot Style Reference - Engage by Lexara

Quick reference for implementing the Engage chatbot interface with consistent styling.

## Essential Colors

```css
/* Primary Brand Colors */
--lexara-dark-navy: #1E2B3B;     /* Headers, primary text */
--lexara-mahogany: #76444B;      /* Primary buttons, CTAs */
--lexara-light-navy: #3B576C;    /* Hover states */
--lexara-sky-blue: #C6D8DB;      /* Light backgrounds */
--lexara-white-smoke: #F3F0ED;   /* Alt backgrounds */

/* Chat Specific */
--user-message-bg: #3B82F6;      /* Blue for user messages */
--bot-message-bg: #E5E7EB;       /* Light gray for bot messages */
--input-border: #E5E7EB;         /* Input field borders */
```

## Typography

```css
/* Font Families */
font-family: 'Open Sans', system-ui, -apple-system, sans-serif; /* All UI text */
font-family: 'Lora', Georgia, serif; /* Optional for headings */

/* Font Sizes */
--text-sm: 0.875rem;   /* Chat messages, labels */
--text-base: 1rem;     /* Input text, buttons */
--text-lg: 1.125rem;   /* Section headers */
```

## Chat Components

### Chat Container
```css
.chat-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  max-width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
}
```

### Chat Header
```css
.chat-header {
  background: var(--lexara-dark-navy);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 1rem 1rem 0 0;
  font-weight: 600;
}
```

### Message Area
```css
.message-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #FAFAFA;
}
```

### User Message
```css
.user-message {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.user-bubble {
  background: #3B82F6;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-top-right-radius: 0.25rem;
  max-width: 70%;
  font-size: 0.875rem;
}
```

### Bot Message
```css
.bot-message {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  align-items: flex-start;
  gap: 0.75rem;
}

.bot-avatar {
  width: 2rem;
  height: 2rem;
  background: var(--lexara-mahogany);
  border-radius: 50%;
  flex-shrink: 0;
}

.bot-bubble {
  background: #E5E7EB;
  color: #111827;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-top-left-radius: 0.25rem;
  max-width: 70%;
  font-size: 0.875rem;
}
```

### Input Area
```css
.input-area {
  padding: 1rem;
  border-top: 1px solid #E5E7EB;
  background: white;
  border-radius: 0 0 1rem 1rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  gap: 0.5rem;
}

.chat-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 150ms;
}

.chat-input:focus {
  border-color: var(--lexara-mahogany);
}

.send-button {
  background: var(--lexara-mahogany);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 300ms;
}

.send-button:hover {
  background: #6B3D44; /* Darker mahogany */
}

.send-button:disabled {
  background: #9CA3AF;
  cursor: not-allowed;
}
```

### Typing Indicator
```css
.typing-indicator {
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
}

.typing-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #6B7280;
  border-radius: 50%;
  animation: typing-pulse 1.5s infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-pulse {
  0%, 60%, 100% { opacity: 0.3; }
  30% { opacity: 1; }
}
```

### Quick Reply Buttons
```css
.quick-replies {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.quick-reply-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--lexara-dark-navy);
  background: white;
  color: var(--lexara-dark-navy);
  border-radius: 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 300ms;
}

.quick-reply-btn:hover {
  background: var(--lexara-dark-navy);
  color: white;
}
```

### System Messages
```css
.system-message {
  text-align: center;
  padding: 0.5rem;
  color: #6B7280;
  font-size: 0.75rem;
  font-style: italic;
}
```

## States & Feedback

### Loading State
```css
.loading-spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #E5E7EB;
  border-top-color: var(--lexara-mahogany);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Error State
```css
.error-message {
  background: #FEE2E2;
  color: #991B1B;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  margin: 0.5rem 0;
}
```

### Success State
```css
.success-message {
  background: #D1FAE5;
  color: #065F46;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  margin: 0.5rem 0;
}
```

## Mobile Responsive

```css
@media (max-width: 640px) {
  .chat-container {
    height: 100vh;
    max-width: 100%;
    border-radius: 0;
  }
  
  .chat-header {
    border-radius: 0;
  }
  
  .input-area {
    border-radius: 0;
  }
  
  .user-bubble,
  .bot-bubble {
    max-width: 85%;
  }
}
```

## Implementation Notes

1. **Icons**: Use inline SVGs, 20x20px for buttons
2. **Animations**: Keep subtle (300ms transitions)
3. **Accessibility**: 
   - Add `aria-label` to icon buttons
   - Use `role="log"` for message area
   - Announce new messages to screen readers
4. **Dark Mode**: Consider CSS variables for easy theming
5. **Performance**: Lazy load older messages if conversation is long

## Example HTML Structure

```html
<div class="chat-container">
  <div class="chat-header">
    <h3>Engage Assistant</h3>
  </div>
  
  <div class="message-area" role="log">
    <!-- Bot message -->
    <div class="bot-message">
      <div class="bot-avatar"></div>
      <div class="bot-bubble">
        Hi! I'm here to help you get started with Lexara.
      </div>
    </div>
    
    <!-- User message -->
    <div class="user-message">
      <div class="user-bubble">
        I need help with pricing
      </div>
    </div>
    
    <!-- Typing indicator -->
    <div class="bot-message">
      <div class="bot-avatar"></div>
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  </div>
  
  <div class="input-area">
    <form class="input-wrapper">
      <input 
        type="text" 
        class="chat-input" 
        placeholder="Type your message..."
        aria-label="Chat message input"
      />
      <button type="submit" class="send-button" aria-label="Send message">
        <svg width="20" height="20" fill="none" stroke="currentColor">
          <path d="M2 10l8-8m0 0l8 8m-8-8v18"/>
        </svg>
      </button>
    </form>
  </div>
</div>
```

## Quick Tailwind Classes Reference

If using Tailwind CSS:

```html
<!-- Chat container -->
<div class="bg-white rounded-2xl shadow-xl max-w-2xl h-[600px] flex flex-col">

<!-- User message -->
<div class="flex justify-end mb-4">
  <div class="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%] text-sm">

<!-- Bot message -->
<div class="flex items-start gap-3 mb-4">
  <div class="w-8 h-8 bg-lexara-mahogany rounded-full flex-shrink-0">
  <div class="bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[70%] text-sm">

<!-- Input -->
<input class="flex-1 px-4 py-3 border border-gray-200 rounded-3xl text-sm focus:outline-none focus:border-lexara-mahogany">

<!-- Send button -->
<button class="bg-lexara-mahogany text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all duration-300">
```

This should give the chatbot engineer everything needed to match the Engage by Lexara design system!