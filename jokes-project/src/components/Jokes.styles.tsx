import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const JokeArea = styled.div`
  min-height: 12lh;     
  display: grid;
  align-items: center;  
`;

const spin = keyframes`to { transform: rotate(360deg); }`;

export const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(226, 232, 240, 0.25);
  border-top-color: #e2e8f0;
  border-radius: 50%;
  animation: ${spin} .8s linear infinite;
`;

export const GlobalStyle = createGlobalStyle`
html, body, #root { height: 100%; background: #0f172a; }
body { margin: 0; color: #e2e8f0; -webkit-font-smoothing: antialiased; }
* { -webkit-tap-highlight-color: transparent; }
`;

export const Page = styled.div`
  min-height: 100svh;
  display: flex;
  justify-content: center;   
  align-items: center;   
  background: #0f172a;
  color: #e2e8f0;
`;

export const Card = styled.div`
  width: 720px;         
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  display: grid;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.2px;
`;

export const Quote = styled.blockquote`
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  background: #0b1220;
  border: 1px solid #172033;
  border-radius: 12px;
  padding: 16px;
  overflow-wrap: anywhere;   
  word-break: break-word;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`;

export const Btn = styled.button`
  appearance: none;
  border: 1px solid #334155;  
  background: #0b1220;
  color: #e2e8f0;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 120ms ease, border-color 120ms ease;
  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid #4f46e5; outline-offset: 2px; }
`;

export const Danger = styled.p`
  color: #fca5a5; 
  margin: 0;
`;

export const fade = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Loading = styled.p`
  margin: 0;
  opacity: 0.8;
  animation: ${fade} 240ms ease;
`;