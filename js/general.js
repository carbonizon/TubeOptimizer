$(document).ready(function(){
    document.getElementById("lp").focus();
    $('.output1').hide()
    $('.output2').hide()
    $('.second').hide()
    $('.third').hide()
    $('.fourth').hide()
    $('.fifth').hide()
    $('.sixth').hide()
    $('.seventh').hide()
    $('#first').click(function(){
        var lp = document.getElementById("lp").value;
        if (lp.length > 2) {
            $('.first').hide("slow")
            $('.second').fadeIn("slow")
            document.getElementById("product").focus();
        }
        else {
            $('#lp').addClass('failed')
        }
        $('#second').click(function(){
        var product = document.getElementById("product").value;
        if (product.length > 2) {
            $('.second').hide("slow")
            $('.third').fadeIn("slow")
            document.getElementById("benefit").focus();
        }
        else {
            $('#product').addClass('failed')
        }
        
        $('#third').click(function(){
        var benefit = document.getElementById("benefit").value;
        if (benefit.length > 2) {
            $('.third').hide("slow")
            $('.fourth').fadeIn("slow")
            document.getElementById("type").focus();
        }
        else {
            $('#benefit').addClass('failed')
        }
        
        $('#fourth').click(function(){
        var type = document.getElementById("type").value;
        if (type.length > 2) {
            $('.fourth').hide("slow")
            $('.fifth').fadeIn("slow")
            document.getElementById("feature1").focus();
        }
        else {
            $('#type').addClass('failed')
        }
        
        $('#fifth').click(function(){
        var feature1 = document.getElementById("feature1").value;
        if (feature1.length > 2) {
            $('.fifth').hide("slow")
            $('.sixth').fadeIn("slow")
            document.getElementById("feature2").focus();
        }
        else {
            $('#feature1').addClass('failed')
        }
        
        $('#sixth').click(function(){
        var feature2 = document.getElementById("feature2").value;
        if (feature2.length > 2) {
            $('.sixth').hide("slow")
            $('.seventh').fadeIn("slow")
            document.getElementById("feature3").focus();
        }
        else {
            $('#feature2').addClass('failed')
        }
        
        $('#seventh').click(function(){
        var feature3 = document.getElementById("feature3").value;
        if (feature3.length > 2) {
            $('.seventh').hide("slow")
            var email = "carbonizon@gmail.com"
            var url = "https://mandrillapp.com/api/1.0/messages/send.json"
            var html = "<p>Landing Page: "+lp+"<br>Product: "+product+"<br>Benefit: "+benefit+"<br>Type: "+type+"<br>Feature: "+feature1+"<br>Feature 2: "+feature2+"<br>Feature 3: "+feature3+"</p>"
            var formData = {
                    "key": "e_OEKonGBGu6MJnNInRZXw",
                    "message": {
                        "html": html,
                        "subject": "YouTube Optimizer Niche",
                        "from_email": "no-reply@randomperson.com",
                        "from_name": "YTOPTI.TK",
                        "to": [
                            {
                            "email": email,
                            "name": "Customer",
                            "type": "to"
                            }
                        ]
                    }
                };
    
                $.ajax({
                    url : url,
                    type: "POST",
                    data : formData,
                    success: function(data, textStatus, jqXHR){
                        
                    
                    },
                    error: function (jqXHR, textStatus, errorThrown){
                        //failure code (wrong email)
                        
                    }
                });
            function getRandomInt (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var rand;
            while((rand = getRandomInt(1, 10)) == 3);
            $('.lp').replaceWith('<span class="lp">'+lp+'</span>')
            $('.product').replaceWith('<span class="product">'+product+'</span>')
            $('.benefit').replaceWith('<span class="benefit">'+benefit+'</span>')
            $('.type').replaceWith('<span class="type">'+type+'</span>')
            $('.feature1').replaceWith('<span class="feature1">'+feature1+'</span>')
            $('.feature2').replaceWith('<span class="feature2">'+feature2+'</span>')
            $('.feature3').replaceWith('<span class="feature3">'+feature3+'</span>')
            if (rand > 5) {
                $('.output1').fadeIn("slow")
            }
            else{
                $('.output2').fadeIn("slow")
            }
        }
        else {
            $('#feature3').addClass('failed')
        }
        })
        })
        })
        })
        })
        })
})
    })
