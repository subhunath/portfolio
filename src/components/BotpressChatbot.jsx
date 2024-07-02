// BotpressChatbot.js

import React, { useEffect } from 'react';

const BotpressChatbot = () => {
  useEffect(() => {
    const bp = window.bp; // Assuming Botpress is loaded globally
    if (bp) {
      bp.embed.mount({ rootId: 'webchat' });
    }
  }, []);

  return (
    <div id="webchat" style={{ height: '100%', width: '100%' }}>
      {/* This div will be used by Botpress to render the chat interface */}
    </div>
  );
};

export default BotpressChatbot;
