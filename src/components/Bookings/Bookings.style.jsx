import styled from "styled-components";

export const BookingsInner = styled.div`
  box-sizing: border-box;

  /* ✅ Always leaves space on the sides */
  width: clamp(280px, calc(100vw - 32px), 820px);

  margin: 0 auto;
  padding: 1rem 1rem 1.25rem;

  background: var(--color-surface);
  border-radius: 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  @media (min-width: 640px) {
    width: clamp(520px, calc(100vw - 48px), 820px);
    padding: 1.25rem 1.5rem 1.5rem;
  }

  /* ✅ super tiny phones */
  @media (max-width: 360px) {
    width: calc(100vw - 24px); /* 12px each side */
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


export const Grid = styled.div`
  display: grid;
  row-gap: 16px;
  column-gap: 16px;

  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;



export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  min-width: 0;
`;


export const Label = styled.label`
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-secondary);
`;

const controlBase = `
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




export const Summary = styled.div`
  font-size: 0.95rem;
  color: var(--color-secondary-text);

  strong {
    color: var(--color-secondary);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  /* ✅ mobile: stacked buttons */
  flex-direction: column;

  @media (min-width: 520px) {
    flex-direction: row;
  }
`;


export const SecondaryButton = styled.button`
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  border: 1.5px solid rgba(0, 0, 0, 0.14);
  cursor: pointer;

  @media (min-width: 520px) {
    width: auto;
    min-width: 120px;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: none;
  cursor: pointer;

  background: var(--color-primary);
  color: #fff;

  @media (min-width: 520px) {
    width: auto;
    min-width: 160px;
  }

  &:disabled {
    opacity: 0.55; /* was too washed out */
    cursor: not-allowed;
  }
`;

export const FullRow = styled.div`
  grid-column: 1 / -1;
  min-width: 0;
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
