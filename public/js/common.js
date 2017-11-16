
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	$("#loginForm").on('submit',(function() {
      var formData = $(this).serialize();
      $.ajax({     
		url: "/api/login",
		type: "post",
        data: formData,
        dataType: "json",
        success: function(data) {
			if(data.code === 200){
				location.href = "/";
			}       
        }
      });
      return false;
    }));