import { useState, useEffect, useCallback } from 'react';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startListening = useCallback(() => {
    setIsListening(true);
    setTranscript('');
    
    // Simulate voice speech recognition
    const sampleQueries = [
      "How to cure leaf spot disease in wheat crops?",
      "What is today's weather forecast for spraying pesticides?",
      "Recommend the best fertilizer mix for 5 acres of cotton."
    ];
    const picked = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];

    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < picked.length) {
        current += picked[i];
        setTranscript(current);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsListening(false);
        }, 800);
      }
    }, 40);
  }, []);

  const stopListening = useCallback(() => {
    setIsListening(false);
  }, []);

  const speakText = useCallback((text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*_#`~]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return {
    isListening,
    transcript,
    isSpeaking,
    startListening,
    stopListening,
    speakText,
    stopSpeaking
  };
};
