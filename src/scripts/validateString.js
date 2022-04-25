export default function validateString(string) {
  const trimString = string.trim();
  const validatedString = trimString.length > 2;
  const data = validatedString ? trimString : "";
  const error = validatedString ? "" : "Input requires more than 2 characters";

  return { data: data, error: error };
}
