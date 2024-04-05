class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateonSubmit();
  }

  validateonSubmit() {
    let self = this;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;

      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });

      if (error == 0) {
        localStorage.setItem("auth", 1);
        this.form.submit();
      }
    });
  }

  //end
}
