$(document).ready(function (){

		$.validator.setDefaults({
			submitHandler:function(){
				alert("Submited");
				console.log("Submited");
			}
		});

		$.validator.addMethod("regex", function(value, element, regexp){
			var re = new RegExp(regexp);
			return this.optional(element) || re.test(value);
		}, "Please Check Your Input" );

		$.validator.addMethod("checknull", function(value, element, arg){
			return arg !== value;
		}, "Please Check Your input" );

		$('#validate_form').validate({

			rules : {
				username : {
					required : {
						depends:function(){
							$(this).val($.trim($(this).val()));
							return true;
						}
					},
					minlength : 3,
					maxlength : 30
				},
				emailadd : {
					required : true,
					minlength : 10
				},
				phonenum : {
					required : true,
					regex : /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
				},
				pass1 : {
					required : true,
					minlength : 5,
					maxlength : 20
				},
				confirmpass : {
					required : true,
					minlength : 5,
					maxlength : 20,
					equalTo : "#pass1"
				}

			},
			messages : {
				username : {
					required : "Please Enter User Name",
					minlength : "Please Enter Valid User Name", 
					maxlength : "User Name is Too Long"
				},
				emailadd : {
					required : "Please Enter Email Address",
					minlength : "Please Enter Valid Email"
				},
				phonenum : {
					required : "Please Enter Phone Number",
					regex : "Enter Number On Proper Format"
				},
				pass1 : {
					required : "Please Enter Password",
					minlength : "Minumun 5 Charter Required",
					maxlength : "Password Too Long (20 Allow)"
				},
				confirmpass : {
					required : "Please Enter Confirm Password",
					minlength : "Minumun 5 Charter Required",
					maxlength : "Password Too Long (20 Allow)",
					equalTo : "Password Does Not Match"
				}
			},
			highlight:function(element){
				$(element).addClass("is-invalid").removeClass("is-valid");
			},
			unhighlight:function(element){
				$(element).addClass("is-valid").removeClass("is-invalid");
			}

		})

	});
