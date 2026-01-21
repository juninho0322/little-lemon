import { useMemo, useState } from "react";
import { Modal } from "../Modal/Modal"; // adjust path if needed
import { Button } from "../Button/Button";
import { Row, Col } from "react-grid-system";

import {
    BookingsInner,
    BookingsHeader,
    TitleWrap,
    BookingsTitle,
    CloseButton,
    BookingsForm,
    Field,
    Label,
    Input,
    Select,
    ErrorText,
    Footer,
    Actions,
    Hint,
    SuccessWrap,
    SuccessIcon,
    SuccessText,
} from "./Bookings.style";

const todayISO = () => {
    const d = new Date();
    const yyyy = String(d.getFullYear());
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

export const Bookings = ({ open, onClose, onSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState(todayISO());
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    const [success, setSuccess] = useState(false);
    const [touched, setTouched] = useState({});

    const errors = useMemo(() => {
        const e = {};

        const fn = firstName.trim();
        const ln = lastName.trim();

        if (!fn) e.firstName = "First name is required.";
        if (!ln) e.lastName = "Last name is required.";

        if (!date) e.date = "Please choose a date.";
        if (!time) e.time = "Please choose a time.";

        const g = Number(guests);
        if (!Number.isFinite(g)) e.guests = "Guests must be a number.";
        else if (g < 1) e.guests = "Minimum 1 guest.";
        else if (g > 20) e.guests = "Maximum 20 guests.";

        if (!occasion) e.occasion = "Please select an occasion.";

        return e;
    }, [firstName, lastName, date, time, guests, occasion]);

    const hasErrors = Object.keys(errors).length > 0;

    const markTouched = (key) =>
        setTouched((prev) => ({
            ...prev,
            [key]: true,
        }));

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setDate(todayISO());
        setTime("00:00");
        setGuests(0);
        setOccasion("");
        setTouched({});
        setSuccess(false);
    };

    const handleClose = () => {
        resetForm();
        onClose?.();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // mark all touched so user sees validation
        setTouched({
            firstName: true,
            lastName: true,
            date: true,
            time: true,
            guests: true,
            occasion: true,
        });

        if (hasErrors) return;

        const payload = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            date, // "YYYY-MM-DD"
            time, // "HH:MM"
            guests: Number(guests),
            occasion,
            createdAt: new Date().toISOString(),
        };

        onSubmit?.(payload);

        // ✅ show success message instead of closing immediately
        setSuccess(true);
    };

    const formatDate = (iso) => {
        if (!iso) return "";
        const [y, m, d] = iso.split("-");
        return `${d}/${m}/${y}`;
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <BookingsInner>
                {success ? (
                    <SuccessWrap>
                        <SuccessIcon>✅</SuccessIcon>

                        <BookingsTitle>Booking Confirmed!</BookingsTitle>

                        <SuccessText>
                            Thanks <strong>{firstName.trim() || "there"}</strong> — your table
                            for <strong>{Number(guests) || 0}</strong> guest(s) on{" "}
                            <strong>{formatDate(date)}</strong> at <strong>{time}</strong> is booked.
                        </SuccessText>

                        <Button type="button" onClick={handleClose}>
                            Close
                        </Button>
                    </SuccessWrap>
                ) : (
                    <>
                        <BookingsHeader>
                            <TitleWrap>
                                <BookingsTitle>Book a Table</BookingsTitle>
                                <Hint>Pick a date/time and tell us your group size.</Hint>
                            </TitleWrap>

                            <CloseButton type="button" onClick={handleClose} aria-label="Close">
                                ✕
                            </CloseButton>
                        </BookingsHeader>

                        <BookingsForm onSubmit={handleSubmit}>
                            <Row gutterWidth={16}>
                                {/* First name */}
                                <Col xs={12} md={6}>
                                    <Field>
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            onBlur={() => markTouched("firstName")}
                                            placeholder="e.g. Luis"
                                            aria-invalid={Boolean(touched.firstName && errors.firstName)}
                                        />
                                        {touched.firstName && errors.firstName && (
                                            <ErrorText>{errors.firstName}</ErrorText>
                                        )}
                                    </Field>
                                </Col>

                                {/* Last name */}
                                <Col xs={12} md={6}>
                                    <Field>
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            onBlur={() => markTouched("lastName")}
                                            placeholder="e.g. Fernandes"
                                            aria-invalid={Boolean(touched.lastName && errors.lastName)}
                                        />
                                        {touched.lastName && errors.lastName && (
                                            <ErrorText>{errors.lastName}</ErrorText>
                                        )}
                                    </Field>
                                </Col>

                                {/* Date */}
                                <Col xs={6} md={6}>
                                    <Field>
                                        <Label htmlFor="date">Date</Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            min={todayISO()}
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            onBlur={() => markTouched("date")}
                                            aria-invalid={Boolean(touched.date && errors.date)}
                                        />

                                        {touched.date && errors.date && (
                                            <ErrorText>{errors.date}</ErrorText>
                                        )}
                                    </Field>
                                </Col>

                                {/* Time */}
                                <Col xs={6} md={6}>
                                    <Field>
                                        <Label htmlFor="time">Time</Label>
                                        <Input
                                            id="time"
                                            type="time"
                                            value={time}
                                            onChange={(e) => {
                                                setTime(e.target.value);
                                                requestAnimationFrame(() => e.target.blur());
                                            }}
                                            onBlur={() => markTouched("time")}
                                            aria-invalid={Boolean(touched.time && errors.time)}
                                        />
                                        {touched.time && errors.time && (
                                            <ErrorText>{errors.time}</ErrorText>
                                        )}
                                    </Field>
                                </Col>

                                {/* Guests */}
                                <Col xs={12} md={6}>
                                    <Field>
                                        <Label htmlFor="guests">Number of guests</Label>
                                        <Input
                                            id="guests"
                                            type="number"
                                            inputMode="numeric"
                                            min={1}
                                            max={20}
                                            value={guests}
                                            onChange={(e) => {
                                                const next = e.target.value;
                                                setGuests(next === "" ? "" : clamp(Number(next), 1, 20));
                                            }}
                                            onBlur={() => markTouched("guests")}
                                            aria-invalid={Boolean(touched.guests && errors.guests)}
                                        />
                                        {Number(guests) <= 0 && <Hint>Max 20 guests per booking.</Hint>}
                                        {touched.guests && errors.guests && (
                                            <ErrorText>{errors.guests}</ErrorText>
                                        )}
                                    </Field>
                                </Col>

                                {/* Occasion */}
                                <Col xs={12} md={6}>
                                    <Field>
                                        <Label htmlFor="occasion">Occasion</Label>
                                        <Select
                                            id="occasion"
                                            value={occasion}
                                            onChange={(e) => setOccasion(e.target.value)}
                                            onBlur={() => markTouched("occasion")}
                                            aria-invalid={Boolean(touched.occasion && errors.occasion)}
                                        >
                                            <option value="" disabled>
                                                Select one…
                                            </option>
                                            <option value="birthday">Birthday</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="date-night">Date night</option>
                                            <option value="business">Business</option>
                                            <option value="other">Other</option>
                                        </Select>
                                        {touched.occasion && errors.occasion && (
                                            <ErrorText>{errors.occasion}</ErrorText>
                                        )}
                                    </Field>
                                </Col>
                            </Row>


                            <Footer>
                                <Actions>
                                    <Button type="button" $width={"100%"} $background={"transparent"} $borderColor={"var(--color-secondary)"} $color={"black"} onClick={handleClose}>
                                        Cancel
                                    </Button>

                                    <Button type="submit" $width={"100%"} $background={"var(--color-primary)"} $color={"var(--color-primary-text)"} $fontWeight={700} disabled={hasErrors}>
                                        Confirm booking
                                    </Button>
                                </Actions>
                            </Footer>
                        </BookingsForm>
                    </>
                )}
            </BookingsInner>
        </Modal>
    );
};
