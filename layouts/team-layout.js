const layoutComponent = (parent, child) => (page) => parent(child(page));

export default layoutComponent;
