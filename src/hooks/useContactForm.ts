import { useRef, useState } from "react";

export type FormState = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  errors: Record<string, string | undefined>;
  success: boolean;
};

export default function useContactForm(initial?: Partial<FormState>) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {},
    success: false,
    ...initial,
  });

  const contactFormRef = useRef<HTMLFormElement | null>(null);

  const validate = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (!formState.name.trim()) errors.name = "Name is required";
    if (!formState.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formState.email))
      errors.email = "Valid email required";
    if (!formState.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return false;
    }

    // Simulate submission (replace with real API call when needed)
    setFormState((prev) => ({ ...prev, success: true, errors: {} }));
    setTimeout(
      () => setFormState((prev) => ({ ...prev, success: false })),
      5000
    );
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormState(
      (prev) =>
        ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
          errors: { ...prev.errors, [name]: undefined },
        } as unknown as FormState)
    );
  };

  const reset = () => {
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {},
      success: false,
    });
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    reset,
    contactFormRef,
    setFormState,
  } as const;
}
