// Convert `URLSearchParams` `[]` properties to array objects.

export const arrayParams = props => {
  const params = {}
  for (const key of props.keys()) {
    if (key.endsWith("[]")) {
      params[key.replace("[]", "")] = props.getAll(key)
    } else {
      params[key] = props.get(key)
    }
  }
  return params
}
