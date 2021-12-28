const validateFields = (form, fieldsArray) => {
  fieldsArray.forEach((field) => {
    field.removeClass("input-error");
    if (field.val().trim() == "") {
      field.addClass("input-error")
    }
  });
  const errorFields = form.find(".input-error");
  console.log(form, fieldsArray, errorFields);
  return errorFields.length === 0;

}

$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $(".modal-form");
  const content = modal.find(".modal-form__text");
  
  modal.removeClass("error-modal");

  const isValid = validateFields(form, [name, phone, comment, to]);
  console.log(isValid)
  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },

    });

    request.done(data => {
      content.text(data.message);
      // console.log(data);
      modal.addClass("error-modal");
    });

    request.fail((data) => {
      console.log(data);
      content.text(data.responseJSON.message);
      modal.addClass("error-modal");
    })

    request.always(() => {
      $.fancybox.open({
        src: "#modal",
        type: "inline"
      })
    })
  }
});

$(".app-btn-close").click(e => {
  e.preventDefault();

  $.fancybox.close();
})