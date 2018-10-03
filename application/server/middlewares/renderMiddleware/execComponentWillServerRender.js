export default (branches, ctx) => {
  const promises = branches.map(async (branch) => {
    let { component } = branch.route;
    const context = {
      match: branch.match,
      ...ctx,
    };

    // Because of react-loadable, we have to use this if condition
    // react loadable will load js page wise asyncronuously but here we need componentWillServerRender thats why we are using component.preload
    if (component.preload) {
      const loadedComponent = await component.preload();
      component = loadedComponent.default;
    }

    if (component.componentWillServerRender) {
      return Promise
        .resolve(component.componentWillServerRender(context))
        .catch(() => {});
    }

    return Promise.resolve();
  });

  return Promise.all(promises);
};
