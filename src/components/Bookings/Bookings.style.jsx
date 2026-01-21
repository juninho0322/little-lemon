import styled from "styled-components";

export const BookingsInner = styled.div`
  box-sizing: border-box;

  width: clamp(280px, calc(100vw - 32px), 820px);

   max-height: calc(100vh - 40px); /* accounts for modal padding */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* 🔒 Always center horizontally */
  margin-left: auto;
  margin-right: auto;

  /* 🔒 Center even inside flex parents */
  align-self: center;


  padding: 1rem 1rem 1.25rem;

  background: var(--color-surface);
  border-radius: 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  @media (min-width: 640px) {
    width: clamp(520px, calc(100vw - 48px), 820px);
    padding: 1.25rem 1.5rem 1.5rem;
  }

  @media (max-width: 360px) {
    width: calc(100vw - 24px);
    padding: 0.9rem 0.9rem 1.1rem;
  }
`;


export const BookingsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;

  margin-bottom: 0.75rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const BookingsTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: var(--fs-h2, 1.6rem);
  color: var(--color-secondary);
  line-height: 1.1;
`;

export const Hint = styled.p`
  margin: 0;
  color: var(--color-secondary-text);
  line-height: 1.4;
  font-size: 0.98rem;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  width: 44px;
  height: 44px;
  border-radius: 12px;

  display: grid;
  place-items: center;

  font-size: 1.25rem;
  color: var(--color-secondary);

  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }
`;

export const BookingsForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 16px; /* was 14px */
`;


export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  padding-bottom: 2rem;
`;



export const Label = styled.label`
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-secondary);
`;

const controlBase = `
-webkit-appearance: none;
  appearance: none;

  min-height: 48px;
  line-height: 1.2;
  box-sizing: border-box;
  display: block;
  width: 100%;

  padding: 12px 14px;
  border-radius: 14px;
  border: 1.5px solid rgba(0,0,0,0.12);
  background: #fff;
  outline: none;

  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(73, 94, 87, 0.18);
  }

  &[aria-invalid="true"] {
    border-color: rgba(220, 38, 38, 0.75);
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.15);
  }
`;



export const Input = styled.input`
  ${controlBase}

  &[type="date"],
  &[type="time"] {
    padding: 10px 12px;
  }
`;

export const Select = styled.select`
  ${controlBase}
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 0.86rem;
  color: rgba(220, 38, 38, 0.95);
`;

export const Footer = styled.div`
  margin-top: 4px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 520px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;




export const Actions = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;

  /* Mobile: stack full-width buttons */
  flex-direction: column;
  align-items: stretch;

  /* Make the Button components actually stretch */
  & > * {
    width: 100%;
  }

  @media (min-width: 520px) {
    /* Desktop: buttons side-by-side, aligned to the right */
    flex-direction: row;

    & > * {
      width: auto;
      min-width: 160px; /* prevents wrapping */
    }
  }
`;



export const SuccessWrap = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const SuccessIcon = styled.div`
  font-size: 2.5rem;
`;

export const SuccessText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-secondary-text);

  strong {
    color: var(--color-secondary);
  }
`;
