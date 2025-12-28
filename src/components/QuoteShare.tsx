'use client';

import { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, Send, Share, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteShareProps {
  blogTitle: string;
  blogUrl: string;
}

export function QuoteShare({ blogTitle, blogUrl }: QuoteShareProps) {
  const [selectedText, setSelectedText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text && text.length > 0) {
        setSelectedText(text);
        
        // Get selection position
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        if (rect) {
          // Calculate safe position within viewport
          const popupWidth = 220; // estimate width of popup
          const popupHeight = 40; // estimate height of popup
          let x = rect.left + rect.width / 2;
          let y = rect.top - 10;
          const rightMargin = window.innerWidth >= 1280 ? 320 : 16; // 320px for xl TOC, else 16px
          if (x < popupWidth / 2) x = popupWidth / 2 + 8;
          if (x > window.innerWidth - rightMargin - popupWidth / 2) x = window.innerWidth - rightMargin - popupWidth / 2 - 8;
          if (y < popupHeight) y = rect.bottom + popupHeight;
          setPosition({ x, y });
          setShowPopup(true);
        }
      } else {
        setShowPopup(false);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, []);


  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${blogUrl}` : blogUrl;
  const quoteText = `"${selectedText}"\n\n— From "${blogTitle}"\n${shareUrl}`;

  // All platforms except LinkedIn support a message + link
  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
    setShowPopup(false);
  };
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(quoteText)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
    setShowPopup(false);
  };
  const handleLinkedInShare = () => {
    // LinkedIn only supports the URL
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
    setShowPopup(false);
  };
  const handleWhatsAppShare = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(quoteText)}`;
    window.open(waUrl, '_blank');
    setShowPopup(false);
  };
  const handleTelegramShare = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(quoteText)}`;
    window.open(tgUrl, '_blank');
    setShowPopup(false);
  };
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: blogTitle, text: quoteText, url: shareUrl });
      } catch {}
    } else {
      handleTwitterShare();
    }
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 99999,
            maxWidth: 220,
          }}
        >
          <div className="flex gap-2">
            <Button onClick={handleTwitterShare} size="sm" className="gap-1 shadow-lg" title="Share on Twitter">
              <Twitter className="w-3 h-3" />
            </Button>
            <Button onClick={handleFacebookShare} size="sm" className="gap-1 shadow-lg" title="Share on Facebook">
              <Facebook className="w-3 h-3" />
            </Button>
            <Button onClick={handleLinkedInShare} size="sm" className="gap-1 shadow-lg" title="Share on LinkedIn">
              <Linkedin className="w-3 h-3" />
            </Button>
            <Button onClick={handleWhatsAppShare} size="sm" className="gap-1 shadow-lg" title="Share on WhatsApp">
              <Send className="w-3 h-3" />
            </Button>
            <Button onClick={handleTelegramShare} size="sm" className="gap-1 shadow-lg" title="Share on Telegram">
              <Share className="w-3 h-3" />
            </Button>
            <Button onClick={handleNativeShare} size="sm" className="gap-1 shadow-lg" title="Native Share">
              <Share2 className="w-3 h-3" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
