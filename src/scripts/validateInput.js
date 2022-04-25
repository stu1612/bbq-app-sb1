export default function onValidate(validation, getter, setter, error) {
  if (validation === undefined) return;
  const result = validation(getter);
  setter(result.data);
  error(result.error);
}
