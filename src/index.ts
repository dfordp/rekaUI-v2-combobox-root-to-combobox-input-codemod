export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find all JSXElements named ComboboxRoot
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'ComboboxRoot' } },
  }).forEach((path) => {
    // Remove the ComboboxRoot element
    j(path).remove();
    dirtyFlag = true;
  });

  return dirtyFlag ? root.toSource() : undefined;
}

export const parser = 'tsx';