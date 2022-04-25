export default function validateNumber(number) {
  const parseNumber = Number(number.trim());
  const validation = parseNumber > 0;
  const data = validation ? parseNumber : "";
  const error = validation ? "" : "Input value must be greater than 0";

  return { data: data, error: error };
}
