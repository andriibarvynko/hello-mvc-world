/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    showMessage() {
        this.view.render(this.model.data);
    }
}
