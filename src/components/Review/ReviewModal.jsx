// ReviewModal.jsx
import { useMemo, useState } from "react";
import { Modal } from "../Modal/Modal"; // adjust path if needed

import {
    ReviewModalInner,
    ReviewHeader,
    ReviewTitle,
    CloseButton,
    ReviewForm,
    Field,
    Label,
    Input,
    TextArea,
    RatingRow,
    Stars,
    StarButton,
    Slider,
    PhotoRow,
    AvatarPreview,
    UploadButton,
    HiddenFileInput,
    Footer,
    SecondaryButton,
    PrimaryButton,
    ErrorText,
} from "./ReviewModal.style";

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

export const ReviewModal = ({ open, onClose, onSubmit }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [text, setText] = useState("");


    // photo handling
    const [photoFile, setPhotoFile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState("");

    const [touched, setTouched] = useState(false);

    const starsText = useMemo(() => "★".repeat(rating) + "☆".repeat(5 - rating), [rating]);

    const errors = useMemo(() => {
        if (!touched) return {};
        const e = {};
        if (!name.trim()) e.name = "Please enter your name.";
        if (text.trim().length < 10) e.text = "Please write at least 10 characters.";
        if (rating < 1 || rating > 5) e.rating = "Rating must be between 1 and 5.";
        return e;
    }, [name, text, rating, touched]);

    const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

    const handlePickPhoto = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // basic guard: allow images only
        if (!file.type.startsWith("image/")) return;

        setPhotoFile(file);

        const url = URL.createObjectURL(file);
        setPhotoPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return url;
        });
    };

    const handleClose = () => {
        onClose?.();
    };

    const handleCancel = () => {
        setName("");
        setRating(5);
        setText("");
        setTouched(false);

        setPhotoFile(null);
        setPhotoPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return "";
        });

        onClose?.();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ force showing errors
        setTouched(true);

        // ✅ validate NOW (synchronously)
        const eObj = {};
        if (!name.trim()) eObj.name = "Please enter your name.";
        if (text.trim().length < 10) eObj.text = "Please write at least 10 characters.";
        if (rating < 1 || rating > 5) eObj.rating = "Rating must be between 1 and 5.";

        // ✅ stop here if invalid (DO NOT close modal)
        if (Object.keys(eObj).length > 0) return;

        const payload = {
            name: name.trim(),
            rating,
            text: text.trim(),
            photoPreview,
            photoFile,
            createdAt: new Date().toISOString(),
        };

        onSubmit?.(payload);
        handleCancel(); // ✅ close only when valid
    };

    return (
        <Modal open={open}>
            <ReviewModalInner role="dialog" aria-modal="true" aria-label="Leave a review">
                <ReviewHeader>
                    <ReviewTitle>Leave a Review</ReviewTitle>
                    <CloseButton type="button" onClick={handleClose} aria-label="Close">
                        ✕
                    </CloseButton>
                </ReviewHeader>

                <ReviewForm onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <Field>
                        <Label htmlFor="review-name">Name</Label>
                        <Input
                            id="review-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setTouched(true)}
                            placeholder="Your name"
                            autoComplete="name"
                        />
                        {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
                    </Field>

                    {/* Photo */}
                    <Field>
                        <Label>Photo (optional)</Label>
                        <PhotoRow>
                            <AvatarPreview
                                src={photoPreview || "data:image/svg+xml,%3Csvg ..."}
                                alt=""
                            />

                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                <HiddenFileInput
                                    id="review-photo-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePickPhoto}
                                />
                                <UploadButton as="label" htmlFor="review-photo-upload">
                                    Upload photo
                                </UploadButton>

                                <HiddenFileInput
                                    id="review-photo-camera"
                                    type="file"
                                    accept="image/*"
                                    capture="environment"
                                    onChange={handlePickPhoto}
                                    className="mobile-camera"
                                />
                                <UploadButton as="label" htmlFor="review-photo-camera" className="mobile-camera">
                                    Take photo
                                </UploadButton>
                            </div>

                        </PhotoRow>

                    </Field>

                    {/* Rating */}
                    <Field>
                        <Label>Rating</Label>
                        <RatingRow>
                            <Stars aria-label={`Rating: ${rating} out of 5`}>{starsText}</Stars>

                            <StarButton
                                type="button"
                                onClick={() => setRating((r) => clamp(r - 1, 1, 5))}
                                aria-label="Decrease rating"
                            >
                                −
                            </StarButton>

                            <Slider
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                onMouseUp={() => setTouched(true)}
                                aria-label="Rating slider"
                            />

                            <StarButton
                                type="button"
                                onClick={() => setRating((r) => clamp(r + 1, 1, 5))}
                                aria-label="Increase rating"
                            >
                                +
                            </StarButton>
                        </RatingRow>

                        {errors.rating ? <ErrorText>{errors.rating}</ErrorText> : null}
                    </Field>

                    {/* Review text */}
                    <Field>
                        <Label htmlFor="review-text">Review</Label>
                        <TextArea
                            id="review-text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onBlur={() => setTouched(true)}
                            placeholder="Tell us about your experience..."
                            rows={5}
                        />
                        {errors.text ? <ErrorText>{errors.text}</ErrorText> : null}
                    </Field>

                    <Footer>
                        <SecondaryButton type="button" onClick={handleCancel}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton type="submit" disabled={!isValid}>
                            Submit review
                        </PrimaryButton>
                    </Footer>
                </ReviewForm>
            </ReviewModalInner>
        </Modal>
    );
};
