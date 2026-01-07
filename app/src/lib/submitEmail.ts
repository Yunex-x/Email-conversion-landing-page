export type SubmitEmailResult =
  | { success: true }
  | { success: false; message: string };

export async function submitEmail(email: string): Promise<SubmitEmailResult> {
  if (!email) {
    return {
      success: false,
      message: "Email is required",
    };
  }

  try {
    console.log("Early access email:", email);
    await new Promise((res) => setTimeout(res, 800));
    return { success: true };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
