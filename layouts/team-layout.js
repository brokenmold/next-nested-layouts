const teamLayoutComponent = (parent, child) => (page) => parent(child(page));

export default teamLayoutComponent;
