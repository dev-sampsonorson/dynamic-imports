/**
 * This use case is all about saving time 
 * and memory only if we need it.
 */
// import renderRectangle from './rectangle.js';
// import renderTriangle from './triangle.js';

const shapes = [
    { type: "rectangle" },
    { type: "triangle" },
    { type: "rectangle"}
];

shapes.forEach(async shape => {
    const { default: renderShape } = await import(`./${shape.type}.js`);

    renderShape(shape);
})