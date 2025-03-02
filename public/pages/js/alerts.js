      //== Class definition
      var SweetAlert2Demo = (function () {
        //== Demos
        var initDemos = function () {
          //== Sweetalert Demo 1
          $("#alert_demo_1").click(function (e) {
            swal("Good job!", {
              buttons: {
                confirm: {
                  className: "btn btn-success",
                },
              },
            });
          });

          //== Sweetalert Demo 2
          $("#alert_demo_2").click(function (e) {
            swal("Registered", "Successfully Registered!", {
              buttons: {
                confirm: {
                  className: "btn btn-success",
                },
              },
            });
          });

          //== Sweetalert Demo 3
          $("#alert_demo_3_1").click(function (e) {
            swal("Good job!", "You clicked the button!", {
              icon: "warning",
              buttons: {
                confirm: {
                  className: "btn btn-warning",
                },
              },
            });
          });

          $("#alert_demo_3_2").click(function (e) {
            swal("Good job!", "You clicked the button!", {
              icon: "error",
              buttons: {
                confirm: {
                  className: "btn btn-danger",
                },
              },
            });
          });

          $("#alert_demo_3_3").click(function (e) {
            swal("Good job!", "You clicked the button!", {
              icon: "success",
              buttons: {
                confirm: {
                  className: "btn btn-success",
                },
              },
            });
          });

          $("#alert_demo_3_4").click(function (e) {
            swal("Good job!", "You clicked the button!", {
              icon: "info",
              buttons: {
                confirm: {
                  className: "btn btn-info",
                },
              },
            });
          });

          //== Sweetalert Demo 4
          $("#alert_demo_4").click(function (e) {
            swal({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success",
              buttons: {
                confirm: {
                  text: "Confirm Me",
                  value: true,
                  visible: true,
                  className: "btn btn-success",
                  closeModal: true,
                },
              },
            });
          });

          $("#alert_demo_5").click(function (e) {
            swal({
              title: "Input Something",
              html: '<br><input class="form-control" placeholder="Input Something" id="input-field">',
              content: {
                element: "input",
                attributes: {
                  placeholder: "Input Something",
                  type: "text",
                  id: "input-field",
                  className: "form-control",
                },
              },
              buttons: {
                cancel: {
                  visible: true,
                  className: "btn btn-danger",
                },
                confirm: {
                  className: "btn btn-success",
                },
              },
            }).then(function () {
              swal("", "You entered : " + $("#input-field").val(), "success");
            });
          });

          $("#alert_demo_6").click(function (e) {
            swal("This modal will disappear soon!", {
              buttons: false,
              timer: 3000,
            });
          });

          $("#alert_demo_7").click(function (e) {
            swal({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              type: "warning",
              buttons: {
                confirm: {
                  text: "Yes, delete it!",
                  className: "btn btn-success",
                },
                cancel: {
                  visible: true,
                  className: "btn btn-danger",
                },
              },
            }).then((Delete) => {
              if (Delete) {
                swal({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  type: "success",
                  buttons: {
                    confirm: {
                      className: "btn btn-success",
                    },
                  },
                });
              } else {
                swal.close();
              }
            });
          });

        //gi dynamic na swal kay para ma customize nato ang text, title, confirm text, cancel text, success text, cancel success text
        $("#alert_demo_8").click(function (e) {
            var title = $(this).data("title");
            var text = $(this).data("text");
            var confirmText = $(this).data("confirm-text") || "Yes, delete it!";
            var cancelText = $(this).data("cancel-text") || "No, cancel!";
            var successText = $(this).data("success-text") || "Poof! Your imaginary file has been deleted!";
            var cancelSuccessText = $(this).data("cancel-success-text") || "Your imaginary file is safe!";

            swal({
                title: title,
                text: text,
                type: "warning",
                buttons: {
                    cancel: {
                        visible: true,
                        text: cancelText,
                        className: "btn btn-danger",
                    },
                    confirm: {
                        text: confirmText,
                        className: "btn btn-success",
                    },
                },
            }).then((willDelete) => {
                if (willDelete) {
                    swal(successText, {
                        icon: "success",
                        buttons: {
                            confirm: {
                                className: "btn btn-success",
                            },
                        },
                    });
                } else {
                    swal(cancelSuccessText, {
                        buttons: {
                            confirm: {
                                className: "btn btn-success",
                            },
                        },
                    });
                }
            });
        });      
    };

        return {
          //== Init
          init: function () {
            initDemos();
          },
        };
      })();

      //== Class Initialization
      jQuery(document).ready(function () {
        SweetAlert2Demo.init();
      });