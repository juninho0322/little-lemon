// ReviewModal.style.jsx
import styled from "styled-components";

export const ReviewModalInner = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  background: var(--color-surface);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  max-height: calc(100vh - 40px);
  overflow: auto;

  /* 👇 MOBILE-ONLY CAMERA BUTTON */
  .mobile-camera {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-camera {
      display: inline-flex;
    }
  }

  /* 👇 HIDE the actual file input always */
input.mobile-camera {
  display: none !important;
}
`;


export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 16px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ReviewTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-h3);
  font-family: var(--font-heading);
  color: var(--color-secondary);
`;

export const CloseButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: transparent;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const ReviewForm = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: 600;
  color: var(--color-secondary);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const RatingRow = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 10px;
`;

export const Stars = styled.div`
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: gold;
  min-width: 92px;
`;

export const StarButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Slider = styled.input`
  width: 100%;
`;

export const PhotoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const AvatarPreview = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-secondary);

  &:hover {
    border-color: var(--color-primary);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 6px;
`;

export const SecondaryButton = styled.button`
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-secondary);
`;

export const PrimaryButton = styled.button`
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background: var(--color-primary);
  cursor: pointer;
  font-weight: 700;
  color: #111;

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`;

export const ErrorText = styled.small`
  color: #b00020;
  font-weight: 600;
`


;

