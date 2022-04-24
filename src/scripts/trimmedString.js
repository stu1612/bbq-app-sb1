export default function trimmedString(text) {
  const string = text;
  const length = 100;
  const trimmedString = string.substring(0, length);
  return trimmedString;
}
