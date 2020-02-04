/**
 * The entry point of your application
 */

const main = () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.showMessage();
};

window.onload = main;
